
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default;
    using MyRow = Entities.CadDespesaRow;
    using System.Linq;
    using WebMyMoney.Modules.Utils;
    using System.Collections.Generic;
    using WebMyMoney.Modules.Default.CadDespesa;

    public class CadDespesaRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public ListScreenViewModel<MyRow> ListCadDespesa(IDbConnection connection, DefaultListRequest request)
        {
            DateTime dataAtual = DateTime.Now;
            var despesaFld = CadDespesaRow.Fields;
            var lastDayOfMonth = DateTime.DaysInMonth(dataAtual.Year, request.mes);
            List<MyRow> lista = new List<MyRow>();
            if (request.tipo == "Vencidos")
            {
             lista  = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento <= dataAtual
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();
            }
            else if(request.tipo == "Esta semana")
            {
                lista = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento >= dataAtual
                && despesaFld.DataVencimento <= dataAtual.AddDays(7)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            }
            else if (request.tipo == "Próximos 30 dias")
            {
                lista = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento >= dataAtual
                && despesaFld.DataVencimento <= dataAtual.AddDays(30)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            }
            else 
            {
                lista = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento >= dataAtual
                && despesaFld.DataVencimento <= dataAtual.AddDays(30)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            }

            return new ListScreenViewModel<MyRow> () { 
                    Lista = lista,
                    TotalConcluido = lista.Count(x=>x.Pago == true),
                    TotalPendente = lista.Count(x => x.Pago != true)

            };

        }


        public MyRow PagarDespesa(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
          var despesa =  connection.TryFirst<MyRow>(MyRow.Fields.CadDespesaId == request.CadDespesaId);
            despesa.Pago = true;

            despesa.DataPagamento = DateTime.Now;
            

            connection.UpdateById<MyRow>(despesa);

            return despesa;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {

                base.BeforeSave();

                if (Row.Pago == true)
                {
                    var conta = new CadContaRepository().Retrieve(this.Connection, new RetrieveRequest() { EntityId = Row.CadContaId });

                    if (conta != null)
                    {
                        conta.Entity.SaldoAtual = conta.Entity.SaldoAtual - Row.ValorTotal;
                        new CadContaRepository().Update(UnitOfWork, new SaveRequest<CadContaRow>() { EntityId = conta.Entity.CadContaId, Entity = conta.Entity });
                    }
                }


                if(Row.CadFaturaCartaoCreditoId != null && Row.IsParcelado == false)
                {
                    var fatura = this.Connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)Row.CadFaturaCartaoCreditoId);

                    fatura.ValorParcialFaturaAtual = fatura.SaldoAnterior + fatura.ValorParcialFaturaAtual + Row.ValorTotal;

                    Row.DataVencimento = fatura.DiaVencimentoFatura;

                    this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);

                }


                if (Row.IsParcelado == true && Row.CadFaturaCartaoCreditoId != 0 )
                {
                    var titulo = Row.Titulo;
                    var valorTotal = Row.ValorTotal;
                    var valorParcela = valorTotal / Row.QdteParcelas;


                    var idFaturaMesAnterior = Row.CadFaturaCartaoCreditoId;

                    //primeiro
                    var fatura = this.Connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)Row.CadFaturaCartaoCreditoId);
                    fatura.ValorParcialFaturaAtual = fatura.ValorParcialFaturaAtual + Row.ValorTotal;
                    this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);


                    Row.ValorTotal = valorParcela;
                    Row.NumParcela = 1;
                    Row.Titulo = titulo + " (1/" + Row.QdteParcelas + ")";

                    var ajusteParcelas = Row.QdteParcelas + 1;

                    for (int i = 2; i < ajusteParcelas; i++)
                    {
                        
                        
                        var faturaSelecionada = this.Connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)idFaturaMesAnterior);


                        var proximoMes = faturaSelecionada.MesFaturaVigente + 1;

                        var faturaProximoMes = new CadFaturaCartaoCreditoRow();

                        faturaProximoMes =  this.Connection.List<CadFaturaCartaoCreditoRow>(
                            CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes
                            ).FirstOrDefault();

                        if (faturaProximoMes == null)
                        {
                            var ano = DateTime.Now.Year;
                            if (proximoMes == 1)
                            {
                                ano = ano + 1;

                                proximoMes = proximoMes + 1;

                            }
                            
                            if (proximoMes > 12 )
                            {
                                ano = ano + 1;

                                proximoMes = 1;

                            }

                            faturaProximoMes = new CadFaturaCartaoCreditoRow()
                            {

                                Ativo = true,
                                MesFaturaVigente = proximoMes,
                                DataFechamentoFatura = new DateTime(ano, proximoMes ?? 1, DateTime.Now.Day),
                                DiaFecharFatura = 16,
                                DiaVencimentoFatura = new DateTime(ano, proximoMes ?? 1, DateTime.Now.Day),
                                SaldoAnterior = 0,
                                CadCartaoCreditoId = fatura.CadCartaoCreditoId,
                                ValorParcialFaturaAtual = valorParcela


                            };

                            this.Connection.Insert<CadFaturaCartaoCreditoRow>(faturaProximoMes);
                        }

                        faturaProximoMes = this.Connection.List<CadFaturaCartaoCreditoRow>(
                            CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes
                            ).FirstOrDefault();

                        faturaProximoMes.ValorParcialFaturaAtual = faturaProximoMes.SaldoAnterior +  faturaProximoMes.ValorParcialFaturaAtual + valorParcela;

                        this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(faturaProximoMes);


                        idFaturaMesAnterior = faturaProximoMes.CadFaturaCartaoCreditoId;

                        CadDespesaRow novoItem = new CadDespesaRow()
                        {
                            ValorTotal = valorParcela,
                            NumParcela = i,
                            Titulo = titulo + "(" + i + "/" + Row.QdteParcelas + ")",
                            CadFaturaCartaoCreditoId = faturaProximoMes.CadFaturaCartaoCreditoId,
                            CadContaId = Row.CadContaId,
                            CadUsuarioId = Row.CadUsuarioId,
                            Ativo = true,
                            CadParticipanteId = Row.CadParticipanteId,
                            CadGrupoFamiliarId = Row.CadGrupoFamiliarId,
                            CodigoTabTipoDespesa = Row.CodigoTabTipoDespesa,
                            DataCriacao = Row.DataCriacao,
                            DataVencimento = faturaProximoMes.DiaVencimentoFatura,
                            Descontos = Row.Descontos,
                            Imposto = Row.Imposto,
                            MultasJuros = Row.MultasJuros,
                            Pago = false
                        };

                        this.Connection.Insert<CadDespesaRow>(novoItem);


                    }
                    Row.NumParcela = 1;
                    Row.QdteParcelas = 0;
                    Row.IsParcelado = false;
                }


                if (Row.IsFixo == true && Row.QdteParcelas > 0 && Row.DataFixaVencimento != null)
                {
                    if(Row.CadFaturaCartaoCreditoId != null)
                    {
                        //primeiro
                        var fatura = this.Connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)Row.CadFaturaCartaoCreditoId);
                        fatura.ValorParcialFaturaAtual = fatura.ValorParcialFaturaAtual + Row.ValorTotal;
                        this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);

                    }
                    
                    
                    var proximoMes = DateTime.Now.Month + 1;
                    var ano = DateTime.Now.Year;
                    var ajusteQdteVezes = Row.QdteParcelas + 1;

                    for (int i = 2; i < ajusteQdteVezes; i++)
                    {
                        int faturaId = 0;
                        if (Row.CadFaturaCartaoCreditoId != null)
                        {
                            var faturaSelecionada = this.Connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)Row.CadFaturaCartaoCreditoId);

                            var faturaProximoMes = new CadFaturaCartaoCreditoRow();

                            faturaProximoMes = this.Connection.List<CadFaturaCartaoCreditoRow>(
                                CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes
                                ).FirstOrDefault();

                            if (faturaProximoMes == null)
                            {
                                if (proximoMes == 1)
                                {
                                    ano = ano + 1;

                                    proximoMes = proximoMes + 1;

                                }

                                if (proximoMes > 12)
                                {
                                    ano = ano + 1;

                                    proximoMes = 1;

                                }

                                faturaProximoMes = new CadFaturaCartaoCreditoRow()
                                {

                                    Ativo = true,
                                    MesFaturaVigente = proximoMes,
                                    DataFechamentoFatura = new DateTime(ano, proximoMes, DateTime.Now.Day),
                                    DiaFecharFatura = 16,
                                    DiaVencimentoFatura = new DateTime(ano, proximoMes, DateTime.Now.Day),
                                    SaldoAnterior = 0,
                                    CadCartaoCreditoId = faturaSelecionada.CadCartaoCreditoId,
                                    ValorParcialFaturaAtual = Row.ValorTotal


                                };

                                this.Connection.Insert<CadFaturaCartaoCreditoRow>(faturaProximoMes);
                            }

                            faturaProximoMes = this.Connection.List<CadFaturaCartaoCreditoRow>(
                                CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes
                                ).FirstOrDefault();

                            faturaProximoMes.ValorParcialFaturaAtual = faturaProximoMes.SaldoAnterior + faturaProximoMes.ValorParcialFaturaAtual + Row.ValorTotal;

                            this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(faturaProximoMes);


                            faturaId = faturaProximoMes.CadFaturaCartaoCreditoId ?? 1;
                        }

                        if (proximoMes == 1)
                        {
                            ano = ano + 1;

                            proximoMes = proximoMes + 1;

                        }

                        if (proximoMes > 12)
                        {
                            ano = ano + 1;

                            proximoMes = 1;

                        }

                        var proximaDespesa = new CadDespesaRow()
                        {
                            Ativo = true,
                            DataVencimento = new DateTime(ano, proximoMes, Row.DataFixaVencimento ?? 1),
                            CadContaId = Row.CadContaId,
                            DataCriacao = Row.DataCriacao,
                            Titulo = Row.Titulo,
                            CadFaturaCartaoCreditoId = faturaId,
                            CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                            CadGrupoFamiliarId = (int)((UserDefinition)Authorization.UserDefinition).CadGrupoFamiliarId,
                            CadParticipanteId = Row.CadParticipanteId,
                            Descontos = Row.Descontos,
                            Imposto = Row.Imposto,
                            ValorTotal = Row.ValorTotal,
                            IsFixo = Row.IsFixo,
                            DataFixaVencimento = Row.DataFixaVencimento,
                            NumParcela = i,
                            MultasJuros = Row.MultasJuros,
                            CodigoTabTipoDespesa = Row.CodigoTabTipoDespesa,
                            Pago = false
                        };

                        this.Connection.Insert<CadDespesaRow>(proximaDespesa);

                    }

                    Row.NumParcela = 1;
                }


            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}