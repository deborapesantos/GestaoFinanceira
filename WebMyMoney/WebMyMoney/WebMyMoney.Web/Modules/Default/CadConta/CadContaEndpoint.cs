
namespace WebMyMoney.Default.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using WebMyMoney.Modules.Default;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Default.CadReceita;
    using WebMyMoney.Modules.Utils;
    using MyRepository = Repositories.CadContaRepository;
    using MyRow = Entities.CadContaRow;

    [RoutePrefix("Services/Default/CadConta"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CadContaController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost]
        public ListDashboardRequest<MyRow> GetDashboard(IDbConnection connection, DefaultListRequest request)
        {
            return new MyRepository().GetDashboard(connection,request);
        }
        [HttpPost]
        public MyRow CriarConta(IDbConnection connection, CadContaRetrieveRequest request)
        {
            return new MyRepository().CriarConta(connection, request);
        }
        [HttpPost]
        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            return new MyRepository().GetTabelasAuxiliares(connection, request);
        }
    }
}
