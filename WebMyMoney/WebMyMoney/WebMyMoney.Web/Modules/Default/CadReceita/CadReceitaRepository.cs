
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default;
    using WebMyMoney.Modules.Utils;
    using MyRow = Entities.CadReceitaRow;

    public class CadReceitaRepository
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

        public ListScreenViewModel<MyRow> ListCadReceita(IDbConnection connection, DefaultListRequest request)
        {
            DateTime dataAtual = DateTime.Now;
            var lastDayOfMonth = DateTime.DaysInMonth(dataAtual.Year, request.mes);

            //var receitasMes = connection.List<MyRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
            //    && fld.DataCriacao > new DateTime(dataAtual.Year, request.mes, 1)
            //    && fld.DataCriacao < new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)).ToList();

            var receitasMes = connection.List<CadReceitaRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
               && ((CadReceitaRow.Fields.DataRecebimento >= new DateTime(dataAtual.Year, request.mes, 1))
               && CadReceitaRow.Fields.DataRecebimento <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)) ||
                ((CadReceitaRow.Fields.DataCriacao >= new DateTime(dataAtual.Year, request.mes, 1))
               && CadReceitaRow.Fields.DataCriacao <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth))).ToList();

            return new ListScreenViewModel<MyRow>()
            {
                Lista = receitasMes,
                TotalConcluido = receitasMes.Count(x => x.Recebido == true),
                TotalPendente = receitasMes.Count(x => x.Recebido != true)

            };

        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {

                base.BeforeSave();

               if(Row.Recebido == true)
                {
                    var conta = new CadContaRepository().Retrieve(this.Connection, new RetrieveRequest() { EntityId = Row.CadContaId });
                    
                    if(conta != null)
                    {
                        conta.Entity.SaldoAtual = conta.Entity.SaldoAtual + Row.Valor;
                        new CadContaRepository().Update(UnitOfWork, new SaveRequest<CadContaRow>() { EntityId = conta.Entity.CadContaId, Entity = conta.Entity });
                    }
                }


            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}