
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
    using System.Globalization;

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
                var diaPrimeiro = dataAtual.AddDays(-dataAtual.Day);
                var ultimoDia = new DateTime(dataAtual.Year, dataAtual.Month, lastDayOfMonth);

                lista = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento >= diaPrimeiro
                && despesaFld.DataVencimento <= ultimoDia
                ).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

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
        public MyRow CriarDespesa(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            System.Globalization.CultureInfo cultureinfo =  new System.Globalization.CultureInfo("en-US");
            var despesa = new MyRow()
            {
                CadContaId = request.CadContaId,
                CadGrupoFamiliarId = request.CadGrupoFamiliarId,
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                CadFaturaCartaoCreditoId = request.CadFaturaCartaoCreditoId,
                CodigoTabTipoDespesa = request.CodigoTabTipoDespesa,
                CadParticipanteId = request.CadParticipanteId,
                Titulo = request.Titulo,
                DataPagamento = DateTime.Parse(request.DataPagamento.ToString(), cultureinfo),
                DataCriacao = DateTime.Now,
                IsFixo = request.IsFixo,
                DataFixaVencimento = request.DataFixaVencimento,
                IsParcelado = request.IsParcelado,
                DataVencimento = DateTime.Parse(request.DataVencimento.ToString(), cultureinfo),
                ValorTotal = Convert.ToDecimal(request.ValorTotal.Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br")),
                MultasJuros = request.MultasJuros,
                Pago = request.Pago,
                Ativo = request.Ativo,
                Imposto = request.Imposto,
                Descontos = request.Descontos
            };

            if (request.DataPagamento.Year == 1)
                despesa.DataPagamento = null;
        
            if (request.CadFaturaCartaoCreditoId == 0)
                despesa.CadFaturaCartaoCreditoId = null;
           
            if (request.CadParticipanteId == 0)
                despesa.CadParticipanteId = null;

            if (request.CodigoTabTipoDespesa == 0)
                despesa.CodigoTabTipoDespesa = null;

            if (!request.IsFixo && request.DataFixaVencimento == 1)
                despesa.DataFixaVencimento = null;

            if (despesa.Pago == true)
            {
                var conta = connection.ById<CadContaRow>(despesa.CadContaId);

                if (conta != null)
                {
                    conta.SaldoAtual = conta.SaldoAtual - despesa.ValorTotal;
                    connection.UpdateById(conta);
                }
            }

      
            if (despesa.CadFaturaCartaoCreditoId > 0 && despesa.IsParcelado == false)
            {
                var fatura = connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)despesa.CadFaturaCartaoCreditoId);

                fatura.ValorParcialFaturaAtual = fatura.SaldoAnterior + fatura.ValorParcialFaturaAtual + despesa.ValorTotal;

                despesa.DataVencimento = fatura.DiaVencimentoFatura;

                connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);

            }


            if (despesa.IsParcelado == true && despesa.CadFaturaCartaoCreditoId != 0)
            {
                var titulo = despesa.Titulo;
                var valorTotal = despesa.ValorTotal;
                var valorParcela = valorTotal / request.QdteParcelas;
                var idFaturaMesAnterior = despesa.CadFaturaCartaoCreditoId;
                var ajusteParcelas = request.QdteParcelas + 1;

                //primeira fatura
                var fatura = connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)despesa.CadFaturaCartaoCreditoId);
                fatura.ValorParcialFaturaAtual = fatura.ValorParcialFaturaAtual + despesa.ValorTotal;
                connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);

                despesa.ValorTotal = valorParcela;
                despesa.NumParcela = 1;
                despesa.Titulo = string.Format("{0} (1/{1})", titulo ,request.QdteParcelas.ToString());

                for (int i = 2; i < ajusteParcelas; i++)
                {
                    var faturaSelecionada = connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)idFaturaMesAnterior);
                    var proximoMes = faturaSelecionada.MesFaturaVigente + 1;
                    var faturaProximoMes = new CadFaturaCartaoCreditoRow();
                    faturaProximoMes = connection.List<CadFaturaCartaoCreditoRow>(  CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes ).FirstOrDefault();

                    if (faturaProximoMes == null)
                    {
                        var ano = DateTime.Now.Year;
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
                            DataFechamentoFatura = new DateTime(ano, proximoMes ?? 1, DateTime.Now.Day),
                            DiaFecharFatura = 16,
                            DiaVencimentoFatura = new DateTime(ano, proximoMes ?? 1, DateTime.Now.Day),
                            SaldoAnterior = 0,
                            CadCartaoCreditoId = fatura.CadCartaoCreditoId,
                            ValorParcialFaturaAtual = valorParcela
                        };
                        connection.Insert<CadFaturaCartaoCreditoRow>(faturaProximoMes);
                    }

                    faturaProximoMes = connection.List<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes).FirstOrDefault();
                    faturaProximoMes.ValorParcialFaturaAtual = faturaProximoMes.SaldoAnterior + faturaProximoMes.ValorParcialFaturaAtual + valorParcela;
                    
                    connection.UpdateById<CadFaturaCartaoCreditoRow>(faturaProximoMes);
        
                    idFaturaMesAnterior = faturaProximoMes.CadFaturaCartaoCreditoId;
                    var cartao = connection.ById<CadCartaoCreditoRow>(faturaProximoMes.CadCartaoCreditoId);

                    CadDespesaRow novoItem = new CadDespesaRow()
                    {
                        ValorTotal = valorParcela,
                        NumParcela = i,
                        Titulo = titulo + "(" + i + "/" + request.QdteParcelas + ")",
                        CadFaturaCartaoCreditoId = faturaProximoMes.CadFaturaCartaoCreditoId,
                        CadContaId = cartao.CadContaId,
                        CadUsuarioId = despesa.CadUsuarioId,
                        Ativo = true,
                        CadParticipanteId = despesa.CadParticipanteId,
                        CadGrupoFamiliarId = despesa.CadGrupoFamiliarId,
                        CodigoTabTipoDespesa = despesa.CodigoTabTipoDespesa,
                        DataCriacao = despesa.DataCriacao,
                        DataVencimento = faturaProximoMes.DiaVencimentoFatura,
                        Descontos = despesa.Descontos,
                        Imposto = despesa.Imposto,
                        MultasJuros = despesa.MultasJuros,
                        Pago = false
                    };

                    connection.Insert<CadDespesaRow>(novoItem);


                }
                despesa.NumParcela = 1;
                request.QdteParcelas = 0;
                despesa.IsParcelado = false;
            }


            if (despesa.IsFixo == true && request.QdteParcelas > 0 && despesa.DataFixaVencimento != null)
            {
                if (despesa.CadFaturaCartaoCreditoId != null)
                {
                    //primeiro
                    var fatura = connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)despesa.CadFaturaCartaoCreditoId);
                    fatura.ValorParcialFaturaAtual = fatura.ValorParcialFaturaAtual + despesa.ValorTotal;
                    connection.UpdateById<CadFaturaCartaoCreditoRow>(fatura);

                }


                var proximoMes = DateTime.Now.Month + 1;
                var ano = DateTime.Now.Year;
                var ajusteQdteVezes = request.QdteParcelas + 1;

                for (int i = 2; i < ajusteQdteVezes; i++)
                {
                    int faturaId = 0;
                    if (despesa.CadFaturaCartaoCreditoId != null)
                    {
                        var faturaSelecionada = connection.First<CadFaturaCartaoCreditoRow>(CadFaturaCartaoCreditoRow.Fields.CadFaturaCartaoCreditoId == (int)despesa.CadFaturaCartaoCreditoId);

                        var faturaProximoMes = new CadFaturaCartaoCreditoRow();

                        faturaProximoMes = connection.List<CadFaturaCartaoCreditoRow>(
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
                                ValorParcialFaturaAtual = despesa.ValorTotal


                            };

                            connection.Insert<CadFaturaCartaoCreditoRow>(faturaProximoMes);
                        }

                        faturaProximoMes = connection.List<CadFaturaCartaoCreditoRow>(
                            CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == (int)proximoMes
                            ).FirstOrDefault();

                        faturaProximoMes.ValorParcialFaturaAtual = faturaProximoMes.SaldoAnterior + faturaProximoMes.ValorParcialFaturaAtual + despesa.ValorTotal;

                        connection.UpdateById<CadFaturaCartaoCreditoRow>(faturaProximoMes);


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
                        DataVencimento = new DateTime(ano, proximoMes, despesa.DataFixaVencimento ?? 1),
                        CadContaId = despesa.CadContaId,
                        DataCriacao = despesa.DataCriacao,
                        Titulo = despesa.Titulo,
                        CadFaturaCartaoCreditoId = faturaId,
                        CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                        CadGrupoFamiliarId = (int)((UserDefinition)Authorization.UserDefinition).CadGrupoFamiliarId,
                        CadParticipanteId = despesa.CadParticipanteId,
                        Descontos = despesa.Descontos,
                        Imposto = despesa.Imposto,
                        ValorTotal = despesa.ValorTotal,
                        IsFixo = despesa.IsFixo,
                        DataFixaVencimento = despesa.DataFixaVencimento,
                        NumParcela = i,
                        MultasJuros = despesa.MultasJuros,
                        CodigoTabTipoDespesa = despesa.CodigoTabTipoDespesa,
                        Pago = false
                    };

                    connection.Insert<CadDespesaRow>(proximaDespesa);

                }

                despesa.NumParcela = 1;
            }

            if(despesa.CadFaturaCartaoCreditoId > 0)
            {
                var fatura = connection.ById<CadFaturaCartaoCreditoRow>(despesa.CadFaturaCartaoCreditoId);
                var cartaocreduto = connection.ById<CadCartaoCreditoRow>(fatura.CadCartaoCreditoId);

                despesa.CadContaId = cartaocreduto.CadContaId;
            }

            connection.Insert(despesa);

            return despesa;
        }
        public MyRow EditarDespesa(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            System.Globalization.CultureInfo cultureinfo = new System.Globalization.CultureInfo("en-US");

            var despesa = connection.ById<CadDespesaRow>(request.CadDespesaId);
            despesa.CadContaId = request.CadContaId;
            despesa.CodigoTabTipoDespesa = request.CodigoTabTipoDespesa;
            despesa.Titulo = request.Titulo;
            despesa.DataPagamento = DateTime.Parse(request.DataPagamento.ToString(), cultureinfo);
            despesa.IsFixo = request.IsFixo;
            //despesa.DataFixaVencimento = request.DataFixaVencimento;
            despesa.DataVencimento = DateTime.Parse(request.DataVencimento.ToString(), cultureinfo);
            despesa.ValorTotal = Convert.ToDecimal(request.ValorTotal.Replace("R$.", "").Replace("R$", "").ToString());
            despesa.Pago = request.Pago;
    



            if (request.DataPagamento.Year == 1)
                despesa.DataPagamento = null;

            if (request.CadFaturaCartaoCreditoId == 0)
                despesa.CadFaturaCartaoCreditoId = null;

            if (request.CadParticipanteId == 0)
                despesa.CadParticipanteId = null;

            if (request.CodigoTabTipoDespesa == 0)
                despesa.CodigoTabTipoDespesa = null;

            if (!request.IsFixo && request.DataFixaVencimento == 1)
                despesa.DataFixaVencimento = null;

            if (despesa.Pago == true)
            {
                var conta = new CadContaRepository().Retrieve(connection, new RetrieveRequest() { EntityId = despesa.CadContaId });

                if (conta != null)
                {
                    conta.Entity.SaldoAtual = conta.Entity.SaldoAtual - despesa.ValorTotal;
                    connection.UpdateById(conta.Entity);
                }
            }

            connection.UpdateById(despesa);

            return despesa;
        }


        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            var hoje = DateTime.Now;
            var proximoMes = new DateTime(hoje.Year, hoje.Month + 1, 28);
            var tabelasAux = new TabelasAuxiliaresViewModel();
            tabelasAux.ListaFaturaCartaoCredito = new List<ActionSelect>();
            tabelasAux.ListaConta= new List<ActionSelect>();
            tabelasAux.ListaParticipante = new List<ActionSelect>();
            tabelasAux.ListaTipoDespesa = new List<ActionSelect>();
            tabelasAux.ListaCartaoCredito = new List<ActionSelect>();
            tabelasAux.ListaGrupo = new List<ActionSelect>();
            
            if(request.CadDespesaId > 0)
            {
                tabelasAux.despesa = connection.ById<CadDespesaRow>(request.CadDespesaId);
            }
            
            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };

            var cartaoCredito = connection.List<CadCartaoCreditoRow>(
                 CadCartaoCreditoRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId 
             ).ToList();


            foreach (var item in cartaoCredito)
            {
                var itemAction = new ActionSelect()
                {
                    id = item.CadCartaoCreditoId ?? 0,
                    text = "mês " + item.Descricao,
                    icon = "",
                    iconColor = ""
                };


                tabelasAux.ListaCartaoCredito.Add(itemAction);
            }
            tabelasAux.ListaCartaoCredito.Add(close);

            var faturaMes = connection.List<CadFaturaCartaoCreditoRow>(
                CadFaturaCartaoCreditoRow.Fields.CadCartaoCreditoCadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId &&
                CadFaturaCartaoCreditoRow.Fields.DataFechamentoFatura > hoje &&
                CadFaturaCartaoCreditoRow.Fields.DataFechamentoFatura <= proximoMes 

                ).ToList();

            foreach (var item in faturaMes)
            {
                var itemAction = new ActionSelect()
                {
                    id = item.CadFaturaCartaoCreditoId ?? 0,
                    text = "mês " + item.DataFechamentoFatura.Value.Month,
                    idFilter = item.CadCartaoCreditoId ?? 0,
                    icon = "",
                    iconColor = ""
                };


                tabelasAux.ListaFaturaCartaoCredito.Add(itemAction);
            }

            tabelasAux.ListaFaturaCartaoCredito.Add(close);

            var conta = connection.List<CadContaRow>(
                CadContaRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                ).ToList();

            foreach (var item in conta)
            {
                tabelasAux.ListaConta.Add(new ActionSelect()
                {
                    id = item.CadContaId ?? 0,
                    text = item.Titulo,
                    icon = "",
                    iconColor = "",
                    idFilter = item.CadGrupoFamiliarId ?? 0
                });
            }
            tabelasAux.ListaConta.Add(close);

            var participantes = connection.List<CadParticipanteRow>(
                CadParticipanteRow.Fields.CadGrupoFamiliarId == (int)((UserDefinition)Authorization.UserDefinition).CadGrupoFamiliarId
                ).ToList();

            foreach (var item in participantes)
            {
                tabelasAux.ListaParticipante.Add(new ActionSelect()
                {
                    id = item.CadParticipanteId ?? 0,
                    text = item.NomeRazaoSocial,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaParticipante.Add(close);

            var tipoDespesa = connection.List<TabTipoDespesaRow>().ToList();

            foreach (var item in tipoDespesa)
            {
                tabelasAux.ListaTipoDespesa.Add(new ActionSelect()
                {
                    id = item.CodigoTabTipoDespesa ?? 0,
                    text = item.Descricao,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaTipoDespesa.Add(close);


            var grupos = connection.List<CadGrupoFamiliarRow>().ToList();

            foreach (var item in grupos)
            {
                tabelasAux.ListaGrupo.Add(new ActionSelect()
                {
                    id = item.CadGrupoFamiliarId ?? 0,
                    text = item.Titulo,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaGrupo.Add(close);

            return tabelasAux;
        }

        public CadDespesaRow GetById(IDbConnection connection, CadDespesaRow request)
        {
            System.Globalization.CultureInfo cultureinfo = new System.Globalization.CultureInfo("pt-BR");
            var despesa = connection.ById<CadDespesaRow>(request.CadDespesaId);

            var tipo = connection.ById<TabTipoDespesaRow>(despesa.CodigoTabTipoDespesa);
            var conta = connection.ById<CadContaRow>(despesa.CadContaId);

            despesa.CodigoTabTipoDespesaDescricao = tipo.Descricao;
            despesa.CadContaTitulo = conta.Titulo;



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