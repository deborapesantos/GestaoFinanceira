
namespace WebMyMoney.Default.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Default.CadUsuario;
    using MyRepository = Repositories.CadUsuarioRepository;
    using MyRow = Entities.CadUsuarioRow;

    [RoutePrefix("Services/Default/CadUsuario"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CadUsuarioController : ServiceEndpoint
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
        public UsuarioRequest GetPerfil(IUnitOfWork uow, MyRow request)
        {
            return new MyRepository().GetPerfil(uow, request);
        }
        [HttpPost]
        public MyRow CriarUsuarioByOtherUser(IUnitOfWork uow, UsuarioRequest request)
        {
            return new MyRepository().CriarUsuarioByOtherUser(uow, request);
        }

        [HttpPost]
        public bool UsuarioIsAdmin(IUnitOfWork uow, MyRow request)
        {
            return new MyRepository().UsuarioIsAdmin(uow, request);
        }
        [HttpPost]
        public TelaPermissaoUsuarioRequest GetUsuarioGerenciamento(IUnitOfWork uow, TelaPermissaoUsuarioRequest request)
        {
            return new MyRepository().GetUsuarioGerenciamento(uow, request);
        }
        [HttpPost]
        public TelaPermissaoUsuarioRequest AdicionarGrupoPermissao(IUnitOfWork uow, PermissaoGrupo request)
        {
            return new MyRepository().AdicionarGrupoPermissao(uow, request);
        }
        [HttpPost]
        public TelaPermissaoUsuarioRequest RemoverGrupoPermissao(IUnitOfWork uow, PermissaoGrupo request)
        {
            return new MyRepository().RemoverGrupoPermissao(uow, request);
        }

        [HttpPost]
        public List<MyRow> ListarUsuarios(IUnitOfWork uow, PermissaoGrupo request)
        {
            return new MyRepository().ListarUsuarios(uow, request);
        }

        [HttpPost]
        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, MyRow request)
        {
            return new MyRepository().GetTabelasAuxiliares(connection, request);
        }
        }
}
