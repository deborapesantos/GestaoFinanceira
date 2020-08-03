
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using WebMyMoney.Modules.Default;
    using WebMyMoney.Modules.Utils;
    using System.Linq;
    using MyRow = Entities.CadCartaoCreditoRow;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default.CadDespesa;
    using System.Collections.Generic;
    using WebMyMoney.Modules.Default.CadReceita;

    public class CadCartaoCreditoRepository
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

        public CartaoCreditoModel ListarCartaoCreditoDepesas(IDbConnection connection, DefaultListRequest request)
        {
            CartaoCreditoModel model = new CartaoCreditoModel();

            var cartaoCredito = connection.List<CadCartaoCreditoRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).FirstOrDefault();

            var faturaMes = connection.List<CadFaturaCartaoCreditoRow>(
                   CadFaturaCartaoCreditoRow.Fields.CadCartaoCreditoCadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId &&
                   CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == request.mes
                   ).FirstOrDefault();

            var receitasCartaoCreditoMes = connection.List<CadDespesaRow>(
                 CadDespesaRow.Fields.CadFaturaCartaoCreditoId == (int)faturaMes.CadFaturaCartaoCreditoId
                   ).ToList();

                model = new CartaoCreditoModel()
                {
                    CadCartaoCreditoId = cartaoCredito.CadCartaoCreditoId ?? 0,
                    CadFaturaId = faturaMes.CadFaturaCartaoCreditoId ?? 0,
                    CadContaId = cartaoCredito.CadContaId ?? 0,
                    CadUsuarioId = cartaoCredito.CadUsuarioId ?? 0,
                    DataPagamento = faturaMes.DataPagamentoFatura ?? new DateTime(),
                    Descricao = cartaoCredito.Descricao,
                    DiaVencimento = cartaoCredito.DiaPagarFatura ?? 1,
                    LimiteDisponivel = cartaoCredito.ValorLimiteAtual ?? 0,
                    LimiteTotal = cartaoCredito.ValorLimiteTotal ?? 0,
                    FaturaAberta = faturaMes.Pago.GetValueOrDefault() ? false : true,
                    ValorFatura = receitasCartaoCreditoMes.Sum(x => x.ValorTotal ?? 0) + (faturaMes.SaldoAnterior ?? 0),
                    Titulo = cartaoCredito.Titulo,
                    listaDespesaCartaoCredito = receitasCartaoCreditoMes,
                    Icone = cartaoCredito.CodigoTabTipoCartaoCreditoIcone,
                    Tipo = cartaoCredito.CodigoTabTipoCartaoCredito ?? 0
                };

            return model;

        }

        public MyRow CriarCartaoCredito(IDbConnection connection, CadCartaoCreditoRetrieveRequest request)
        {
            var diaVencimento = new DateTime(DateTime.Now.Year, DateTime.Now.Month, request.DiaVencimentofatura);
            System.Globalization.CultureInfo cultureinfo = new System.Globalization.CultureInfo("en-US");
            var cartaoCredito = new CadCartaoCreditoRow()
            {
                Ativo = true,
                CadContaId = request.CadContaId,
                Descricao = request.Descricao,
                DiaFecharFatura = request.DiaFecharFatura,
                DiaPagarFatura = request.DiaPagarFatura,
                DiaVencimentofatura = diaVencimento,
                Saldo = 0,
                ValorLimiteTotal = Convert.ToDecimal(request.ValorLimiteTotal.Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br")),
                ValorLimiteAtual = Convert.ToDecimal(request.ValorLimiteAtual.Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br")),
                Titulo = request.Titulo,
                CodigoTabTipoCartaoCredito = request.CodigoTabTipoCartaoCredito,
                CadGrupoFamiliarId = request.CadGrupoFamiliarId,
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
            };

            connection.Insert<CadCartaoCreditoRow>(cartaoCredito);

            return cartaoCredito;

        }

        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            var hoje = DateTime.Now;
            var proximoMes = new DateTime(hoje.Year, hoje.Month + 1, 28);
            var tabelasAux = new TabelasAuxiliaresViewModel();
            tabelasAux.ListaConta = new List<ActionSelect>();
            tabelasAux.ListaTipCartaoCredito = new List<ActionSelect>();
            tabelasAux.ListaGrupo = new List<ActionSelect>();

            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };
       
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

            var tipoCartao = connection.List<TabTipoCartaoCreditoRow>().ToList();

            foreach (var item in tipoCartao)
            {
                tabelasAux.ListaTipCartaoCredito.Add(new ActionSelect()
                {
                    id = item.CodigoTabTipoCartaoCredito ?? 0,
                    text = item.Descricao,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaTipCartaoCredito.Add(close);


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
        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}