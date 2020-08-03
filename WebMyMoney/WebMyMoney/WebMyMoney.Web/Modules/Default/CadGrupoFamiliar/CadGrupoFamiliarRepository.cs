
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Default.CadUsuario;
    using MyRow = Entities.CadGrupoFamiliarRow;

    public class CadGrupoFamiliarRepository
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

        public MyRow CriarGrupo(IDbConnection connection, SaveRequest<MyRow> request)
        {
            var grupo = new CadGrupoFamiliarRow()
            {
                CodigoAcesso = request.Entity.CodigoAcesso,
                Titulo = request.Entity.Titulo,
                DataCriacao = DateTime.Now,
                CadAssinanteId = (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId

            };

            connection.Insert<CadGrupoFamiliarRow>(grupo);
            return grupo;
        }
        public UsuarioRequest AlterarGrupo(IUnitOfWork uow, MyRow request)
        {
            var user = uow.Connection.ById<CadUsuarioRow>((int)((UserDefinition)Authorization.UserDefinition).UsuarioId);
            user.CadGrupoFamiliarId = request.CadGrupoFamiliarId;
            uow.Connection.UpdateById(user);
            var grupo = uow.Connection.ById<CadGrupoFamiliarRow>(request.CadGrupoFamiliarId);


           if(!uow.Connection.Exists<PermissaoUserVisualizarGrupoRow>(
               PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                && PermissaoUserVisualizarGrupoRow.Fields.CadGrupoFamiliarId == (int)request.CadGrupoFamiliarId))
            {
                uow.Connection.Insert(new PermissaoUserVisualizarGrupoRow()
                {
                    CadGrupoFamiliarId = (int)request.CadGrupoFamiliarId,
                    NomeGrupo = grupo.Titulo,
                    CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                });
            }


            var grupos = uow.Connection.List<CadGrupoFamiliarRow>().ToList();
            var listaGrupo = new List<ActionSelect>();
            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };
            foreach (var item in grupos)
            {
                listaGrupo.Add(new ActionSelect()
                {
                    id = item.CadGrupoFamiliarId ?? 0,
                    text = item.Titulo,
                    icon = "",
                    iconColor = ""
                });
            }
            listaGrupo.Add(close);

            var usuarioModel = new UsuarioRequest()
            {
                CadGrupoFamiliarId = user.CadGrupoFamiliarId ?? 0,
                Email = user.Email,
                Nome = user.Nome,
                Telefone = user.Telefone,
                NomeGrupoFamiliar = grupo.Titulo,
                ListaGrupo = listaGrupo
            };

            return usuarioModel;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}