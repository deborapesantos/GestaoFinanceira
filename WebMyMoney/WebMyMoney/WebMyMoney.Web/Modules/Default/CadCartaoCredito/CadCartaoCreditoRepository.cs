
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
                    CadCoartaoCreditoId = cartaoCredito.CadCartaoCreditoId ?? 0,
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


        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}