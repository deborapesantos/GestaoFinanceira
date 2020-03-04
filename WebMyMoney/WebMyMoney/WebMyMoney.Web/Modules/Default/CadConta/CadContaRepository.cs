
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
        public ListDashboardRequest<MyRow> GetSaldoAtual(IDbConnection connection)
        {
            var saldo = connection.List<MyRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).Sum(x => x.SaldoAtual).GetValueOrDefault();
         
            return new ListDashboardRequest<MyRow>()
            {
                SumValue = saldo
            };
        }


        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { 
        
        
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