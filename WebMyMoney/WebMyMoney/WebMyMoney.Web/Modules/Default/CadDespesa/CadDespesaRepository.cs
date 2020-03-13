
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
            var lastDayOfMonth = DateTime.DaysInMonth(dataAtual.Year, request.mes);

            var DespesasMes = connection.List<MyRow>(
                   fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && fld.DataVencimento >= new DateTime(dataAtual.Year, request.mes, 1)
                && fld.DataVencimento <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)).Where(x => x.CadFaturaCartaoCreditoId == null).OrderByDescending(x => x.DataVencimento).ToList();



            return new ListScreenViewModel<MyRow> () { 
                    Lista = DespesasMes,
                    TotalConcluido = DespesasMes.Count(x=>x.Pago == true),
                    TotalPendente = DespesasMes.Count(x => x.Pago != true)

            };

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

                    fatura.ValorParcialFaturaAtual = fatura.ValorParcialFaturaAtual + Row.ValorTotal;

                    this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);

                }


                if (Row.IsParcelado == true && Row.CadFaturaCartaoCreditoId != 0)
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
                        
                        var faturaProximoMes = this.Connection.First<CadFaturaCartaoCreditoRow>(
                            CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes
                            );

                        faturaProximoMes.ValorParcialFaturaAtual = faturaProximoMes.ValorParcialFaturaAtual + Row.ValorTotal;

                        this.Connection.UpdateById<CadFaturaCartaoCreditoRow>(faturaProximoMes);


                        idFaturaMesAnterior = faturaProximoMes.CadFaturaCartaoCreditoId;

                       if (faturaProximoMes == null)
                        {

                        }

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
                }


            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}