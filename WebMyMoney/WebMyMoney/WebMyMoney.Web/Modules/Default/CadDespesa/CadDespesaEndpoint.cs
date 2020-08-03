
namespace WebMyMoney.Default.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using WebMyMoney.Modules.Default;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Utils;
    using MyRepository = Repositories.CadDespesaRepository;
    using MyRow = Entities.CadDespesaRow;

    [RoutePrefix("Services/Default/CadDespesa"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CadDespesaController : ServiceEndpoint
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
        public ListScreenViewModel<MyRow> ListCadDespesa(IDbConnection connection, DefaultListRequest request)
        {
            return new MyRepository().ListCadDespesa(connection, request);
        }

        [HttpPost]
        public MyRow PagarDespesa(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            return new MyRepository().PagarDespesa(connection, request);
        }

        [HttpPost]
        public MyRow CriarDespesa(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            return new MyRepository().CriarDespesa(connection, request);
        }

        [HttpPost]
        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            return new MyRepository().GetTabelasAuxiliares(connection, request);
        }

        [HttpPost]
        public MyRow EditarDespesa(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            return new MyRepository().EditarDespesa(connection, request);
        }
        [HttpPost]
        public MyRow GetById(IDbConnection connection, MyRow request)
        {
            return new MyRepository().GetById(connection, request);
        }


        
    }
}
