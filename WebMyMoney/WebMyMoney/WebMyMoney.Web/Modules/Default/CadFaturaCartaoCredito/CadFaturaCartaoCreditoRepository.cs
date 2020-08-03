
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using WebMyMoney.Default.Entities;
    using MyRow = Entities.CadFaturaCartaoCreditoRow;

    public class CadFaturaCartaoCreditoRepository
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

        public CadFaturaCartaoCreditoRow PagarFatura(IDbConnection connection, SaveRequest<MyRow> request)
        {
            var fatura = connection.ById<CadFaturaCartaoCreditoRow>(request.EntityId);

            fatura.Pago = true;
            fatura.DataPagamentoFatura = DateTime.Now;

            connection.UpdateById(fatura);


            if (fatura.Pago == true)
            {
                var listaDespesas = connection.List<CadDespesaRow>(CadDespesaRow.Fields.CadFaturaCartaoCreditoId == (int)fatura.CadFaturaCartaoCreditoId).ToList();

                foreach (var item in listaDespesas)
                {
                    item.Pago = true;
                    item.DataPagamento = fatura.DataPagamentoFatura;
                   connection.UpdateById<CadDespesaRow>(item);
                }

                var cartao = connection.ById<CadCartaoCreditoRow>((int)fatura.CadCartaoCreditoId);

                var conta = connection.ById<CadContaRow>((int)cartao.CadContaId);

                conta.SaldoAtual = conta.SaldoAtual - listaDespesas.Sum(x => x.ValorTotal);

                connection.UpdateById<CadContaRow>(conta);

            }

            return fatura;

        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {


            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (Row.Pago == true)
                {
                    if(Row.DataPagamentoFatura == null)
                    {
                        Row.DataPagamentoFatura = DateTime.Now;
                    }


                    
                }
            }


            protected override void AfterSave()
            {
                base.AfterSave();


                if(Row.Pago == true)
                {
                      var listaDespesas = this.Connection.List<CadDespesaRow>(CadDespesaRow.Fields.CadFaturaCartaoCreditoId == (int)Row.CadFaturaCartaoCreditoId).ToList();
                          
                        foreach(var item in listaDespesas)
                        {
                            item.Pago = true;
                            item.DataPagamento = Row.DataPagamentoFatura;
                            this.Connection.UpdateById<CadDespesaRow>(item);
                        }

                        var cartao = this.Connection.First<CadCartaoCreditoRow>(CadCartaoCreditoRow.Fields.CadCartaoCreditoId == (int)Row.CadCartaoCreditoId);


                    var conta = this.Connection.First<CadContaRow>(CadContaRow.Fields.CadContaId ==  (int)cartao.CadContaId);

                    conta.SaldoAtual = conta.SaldoAtual - listaDespesas.Sum(x => x.ValorTotal);

                    this.Connection.UpdateById<CadContaRow>(conta);


 //                   var proximaFatura = this.Connection.First<MyRow>(MyRow.Fields.MesFaturaVigente == (int)Row.MesFaturaVigente + 1);
//
 //                   this.Connection.UpdateById<MyRow>(proximaFatura);
                }

                BatchGenerationUpdater.OnCommit(this.UnitOfWork, fld.GenerationKey);
            }



        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}