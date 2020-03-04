
namespace WebMyMoney.Default.Repositories
{
    using GestaoContratos.Modules.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Security.Cryptography;
    using System.Text;
    using WebMyMoney.Administration;
    using WebMyMoney.Administration.Repositories;
    using MyRow = Entities.CadAssinanteRow;
    using System.Linq;
    public class CadAssinanteRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            
            protected override void AfterSave()
            {
                base.AfterSave();


                if (IsCreate)
                {
                        
                   
                        /*insere o usuário vinculado ao assinante*/
                        SaveRequest<Administration.Entities.UserRow> usuario = new SaveRequest<Administration.Entities.UserRow>();
                        usuario.Entity = new Administration.Entities.UserRow();
                        usuario.Entity.DisplayName = Row.UsarioAdminNome;
                        usuario.Entity.Email = Row.UsuarioAdminEmail;
                        usuario.Entity.Password = Row.Senha;
                        usuario.Entity.Username = Row.Username;
                        usuario.Entity.UsuarioId = 1;
                        
                       
                        SaveResponse saveuserResponse = new UserRepository().Create(UnitOfWork, usuario);

                        var ultimo = this.Connection.List<Administration.Entities.UserRow>().ToList().OrderBy(x => x.UserId).LastOrDefault();



                    new UserRoleRepository().Update(UnitOfWork, new UserRoleUpdateRequest() { UserID = ultimo.UserId, Roles = new List<int>(new int[] { 2 }) });


                        /*insere o grupo familiar vinculado ao assinante*/
                        SaveRequest<Default.Entities.CadGrupoFamiliarRow> grupoFamiliar = new SaveRequest<Default.Entities.CadGrupoFamiliarRow>();
                        grupoFamiliar.Entity = new Default.Entities.CadGrupoFamiliarRow();
                        grupoFamiliar.Entity.CadAssinanteId = Row.CadAssinanteId;
                        grupoFamiliar.Entity.Ativo = true;
                        grupoFamiliar.Entity.DataCriacao = DateTime.Now;
                        grupoFamiliar.Entity.CodigoAcesso = "E4B65B";
                        grupoFamiliar.Entity.QdteUsuarios = 5;
                  
                        SaveResponse savegrupoResponse = new CadGrupoFamiliarRepository().Create(UnitOfWork, grupoFamiliar);



                        /*insere o usuario vinculado ao assinante*/
                        SaveRequest<Default.Entities.CadUsuarioRow> usuarioSis = new SaveRequest<Default.Entities.CadUsuarioRow>();
                        usuarioSis.Entity = new Default.Entities.CadUsuarioRow();
                        usuarioSis.Entity.CadGrupoFamiliarId = Int32.Parse(savegrupoResponse.EntityId.ToString());
                        usuarioSis.Entity.UserId = ultimo.UserId;
                        usuarioSis.Entity.Nome = Row.UsarioAdminNome;
                        usuarioSis.Entity.Email = Row.UsuarioAdminEmail;
                        usuarioSis.Entity.Ativo = true;
                        usuarioSis.Entity.Telefone = Row.Telefone;
                        usuarioSis.Entity.DataCriacao = DateTime.Now;

                        SaveResponse saveusuarioSisResponse = new CadUsuarioRepository().Create(UnitOfWork, usuarioSis);

                        Row.UsuarioAdminId = Int32.Parse(saveusuarioSisResponse.EntityId.ToString());

                        new CadAssinanteRepository().Update(UnitOfWork, new SaveRequest<MyRow>() {EntityId = Row.CadAssinanteId ,Entity = Row });

                        usuario.Entity.UsuarioId = Int32.Parse(saveusuarioSisResponse.EntityId.ToString());

                        new UserRepository().Update(UnitOfWork, new SaveRequest<Administration.Entities.UserRow>() { EntityId = ultimo.UserId, Entity = usuario.Entity });


                }


                BatchGenerationUpdater.OnCommit(this.UnitOfWork, fld.GenerationKey);
            }


      

    }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}