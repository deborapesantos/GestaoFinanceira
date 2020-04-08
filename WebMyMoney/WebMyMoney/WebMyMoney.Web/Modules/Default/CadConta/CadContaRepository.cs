
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CadContaRow;
    using System.Linq;
    using WebMyMoney.Modules.Utils;
    using WebMyMoney.Modules.Default;
    using System.Collections.Generic;
    using WebMyMoney.Default.Entities;

    public class CadContaRepository
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

        public ListResponse<MyRow> ListWithoutTennant(IDbConnection connection, DefaultListRequest request)
        {
            return new ListWithoutTennantHandler().Process(connection, request);
        }
        public ListDashboardRequest<MyRow> GetDashboard(IDbConnection connection, DefaultListRequest request)
        {


            var despesaFld = CadDespesaRow.Fields;
            List<DespesaMesModel> despesaMes = new List<DespesaMesModel>();
            List<CartaoCreditoModel> cartao = new List<CartaoCreditoModel>();
            List<DespesaMesModel> proximosVencimentos = new List<DespesaMesModel>();
            DateTime dataAtual = DateTime.Now;

            var saldo = connection.List<MyRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).Sum(x => x.SaldoAtual).GetValueOrDefault();

            //var totalReceita = connection.List<CadReceitaRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
            //    && CadReceitaRow.Fields.Recebido == 1).Sum(x => x.Valor).GetValueOrDefault();

            var lastDayOfMonth = DateTime.DaysInMonth(dataAtual.Year, request.mes);

            var totalReceita = connection.List<CadReceitaRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && ((CadReceitaRow.Fields.DataRecebimento >= new DateTime(dataAtual.Year, request.mes, 1))
                && CadReceitaRow.Fields.DataRecebimento <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)) ||
                 ((CadReceitaRow.Fields.DataCriacao >= new DateTime(dataAtual.Year, request.mes, 1))
                && CadReceitaRow.Fields.DataCriacao <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth))
                && CadReceitaRow.Fields.Recebido == 1).Sum(x => x.Valor).GetValueOrDefault();


            var totasDespesasMes = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento > new DateTime(dataAtual.Year, request.mes, 1)
                && despesaFld.DataVencimento < new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)
                ).ToList().Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var vencidos = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento <= dataAtual 
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var estaSemana = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento >= dataAtual 
                && despesaFld.DataVencimento <= dataAtual.AddDays(7)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var esteMes = connection.List<CadDespesaRow>(
                   despesaFld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && despesaFld.DataVencimento >= dataAtual 
                && despesaFld.DataVencimento <= dataAtual.AddDays(30)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var totalDespesas = totasDespesasMes.Sum(x => x.ValorTotal).GetValueOrDefault();

                DespesaMesModel vencido = new DespesaMesModel()
                {
                    CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                    Descricao = "Vencidos",
                    Valor = vencidos.Sum(x => x.ValorTotal) ?? 0,
                    Qtde = vencidos.Count()
                };
           
            despesaMes.Add(vencido);

            despesaMes.Add(new DespesaMesModel()
            {
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                Descricao = "Esta semana",
                Valor = estaSemana.Sum(x => x.ValorTotal) ?? 0,
                Qtde = estaSemana.Count()
                
            });

            despesaMes.Add(new DespesaMesModel()
            {
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                Descricao = "Próximos 30 dias",
                Valor = esteMes.Sum(x => x.ValorTotal) ?? 0,
                Qtde = esteMes.Count()
            });

            

            var cartaoCredito = connection.List<CadCartaoCreditoRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).ToList();


            foreach (var item in cartaoCredito)
            {
                var faturaMes = connection.List<CadFaturaCartaoCreditoRow>(
                   CadFaturaCartaoCreditoRow.Fields.CadCartaoCreditoCadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId &&
                   CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == request.mes
                   ).FirstOrDefault();

                var receitasCartaoCreditoMes = connection.List<CadDespesaRow>(
                 CadDespesaRow.Fields.CadFaturaCartaoCreditoId == (int)faturaMes.CadFaturaCartaoCreditoId
                   ).ToList();

                

                cartao.Add(new CartaoCreditoModel()
                {
                    CadCartaoCreditoId = item.CadCartaoCreditoId ?? 0,
                    CadFaturaId = faturaMes.CadFaturaCartaoCreditoId ?? 0,
                    CadContaId = item.CadContaId ?? 0,
                    CadUsuarioId = item.CadUsuarioId ?? 0,
                    DataPagamento = faturaMes.DataPagamentoFatura ?? new DateTime(),
                    Descricao = item.Descricao,
                    DiaVencimento = item.DiaPagarFatura ?? 1,
                    LimiteDisponivel = item.ValorLimiteAtual ?? 0,
                    LimiteTotal = item.ValorLimiteTotal ?? 0,
                    FaturaAberta = faturaMes.Pago.GetValueOrDefault() ? false: true,
                    ValorFatura = receitasCartaoCreditoMes.Sum(x=>x.ValorTotal ?? 0) + (faturaMes.SaldoAnterior ?? 0),
                    Titulo = item.Titulo,
                    listaDespesaCartaoCredito = receitasCartaoCreditoMes
                });

            }



            foreach (var item in esteMes)
            {
                proximosVencimentos.Add(new DespesaMesModel()
                {
                    CadContaId = item.CadContaId ?? 0,
                    CadDespesaId = item.CadDespesaId ?? 0,
                    CadUsuarioId = item.CadUsuarioId ?? 0,
                    DataVencimento = item.DataVencimento ?? DateTime.Now,
                    Descricao = item.Titulo,
                    Valor = item.ValorTotal ?? 0,
                    Ativo = item.Ativo ?? false,
                    CadGrupoFamiliarId = item.CadGrupoFamiliarId ?? 0,
                    CadFaturaCartaoCreditoId = item.CadFaturaCartaoCreditoId ?? 0,
                    CadParticipanteId = item.CadParticipanteId ?? 0,
                    CodigoTabTipoDespesa = item.CodigoTabTipoDespesa ?? 0,
                    DataCriacao = item.DataCriacao ?? DateTime.Now,
                    DataFixaVencimento = item.DataFixaVencimento ?? 0,
                    DataPagamento = item.DataPagamento ?? DateTime.Now,
                    Descontos = item.Descontos ?? 0,
                    Imposto = item.Imposto ?? 0,
                    IsFixo = item.IsFixo ?? false,
                    IsParcelado = item.IsParcelado ??  false,
                    MultasJuros = item.MultasJuros ?? 0,
                    Pago = item.Pago ?? false,
                    QdteParcelas = item.QdteParcelas ?? 0,
                    Titulo = item.Titulo,
                    ValorTotal = item.ValorTotal ?? 0

                });
            }

            return new ListDashboardRequest<MyRow>()
            {
                SaldoAtual = saldo,
                TotalReceitas = totalReceita,
                TotalDespesas = totalDespesas,
                ListaTodasReceitasDoMes = despesaMes,
                ListaProximosVencimentos = proximosVencimentos,
                ListaCartaoCredito = cartao
            };
        }


        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow>
        {


        }

        private class ListWithoutTennantHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where(fld.Ativo == 1);
            }

        }


    }
}