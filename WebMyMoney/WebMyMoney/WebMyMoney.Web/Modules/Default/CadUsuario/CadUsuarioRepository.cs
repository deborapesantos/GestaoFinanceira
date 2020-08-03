
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using WebMyMoney.Administration;
    using WebMyMoney.Administration.Entities;
    using WebMyMoney.Administration.Repositories;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Default.CadUsuario;
    using MyRow = Entities.CadUsuarioRow;

    public class CadUsuarioRepository
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

        public MyRow CriarUsuarioByOtherUser(IUnitOfWork uow, UsuarioRequest request)
        {
            var grupo = uow.Connection.ById<CadGrupoFamiliarRow>((int)request.CadGrupoFamiliarId);
            UserRow usuario = new UserRow();
           
            usuario.DisplayName = request.Nome;
            usuario.Email = request.Email;
            usuario.Password = request.Password;
            usuario.Username = request.NomeUsuario;
            usuario.UsuarioId = 1;

            

            new UserRepository().Create(uow, new SaveRequest<UserRow>()
            {
                Entity = usuario
            });

            var ultimo = uow.Connection.List<UserRow>()
              .ToList().OrderBy(x => x.UserId).LastOrDefault();

            new UserRoleRepository().Update(uow, new UserRoleUpdateRequest() { UserID = ultimo.UserId, Roles = new List<int>(new int[] { 2 }) });

            if(!uow.Connection.Exists<CadGrupoFamiliarRow>(CadGrupoFamiliarRow.Fields.Titulo == usuario.Username && 
                CadGrupoFamiliarRow.Fields.CadAssinanteId ==(int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId))
            {
                uow.Connection.Insert<CadGrupoFamiliarRow>(new CadGrupoFamiliarRow()
                {
                    CadAssinanteId = (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId,
                    Titulo = usuario.Username,
                    Ativo = true,
                    CodigoAcesso = "",
                    DataCriacao = DateTime.Now,
                    IsGrupoPessoal = true,
                    QdteUsuarios = 5,
                });
            }

            var grupoPessoal = uow.Connection.First<CadGrupoFamiliarRow>(CadGrupoFamiliarRow.Fields.Titulo == usuario.Username &&
                   CadGrupoFamiliarRow.Fields.CadAssinanteId == (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId);


            var ultimous = uow.Connection.List<CadUsuarioRow>()
               .ToList().OrderBy(x => x.CadUsuarioId).LastOrDefault();

            ///*insere o usuario vinculado ao assinante*/
            CadUsuarioRow usuarioSis = new CadUsuarioRow();
            usuarioSis.CadGrupoFamiliarId = grupoPessoal.CadGrupoFamiliarId;
            usuarioSis.GrupoPessoalId = (int)grupoPessoal.CadGrupoFamiliarId;
            usuarioSis.UserId = ultimo.UserId;
            usuarioSis.Nome = request.Nome;
            usuarioSis.Email = request.Email;
            usuarioSis.Ativo = true;
            usuarioSis.Telefone = request.Telefone;
            usuarioSis.DataCriacao = DateTime.Now;
            usuario.UsuarioId = ultimous.CadUsuarioId + 1;

            uow.Connection.Insert<CadUsuarioRow>(usuarioSis);

            if (!uow.Connection.Exists<PermissaoUserVisualizarGrupoRow>(
              PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId == (int)usuario.UsuarioId
               && PermissaoUserVisualizarGrupoRow.Fields.CadGrupoFamiliarId == (int)request.CadGrupoFamiliarId))
            {
                uow.Connection.Insert(new PermissaoUserVisualizarGrupoRow()
                {
                    CadGrupoFamiliarId = grupo.CadGrupoFamiliarId,
                    NomeGrupo = grupo.Titulo,
                    CadUsuarioId = (int)usuario.UsuarioId
                });

                uow.Connection.Insert(new PermissaoUserVisualizarGrupoRow()
                {
                    CadGrupoFamiliarId = grupoPessoal.CadGrupoFamiliarId,
                    NomeGrupo = grupoPessoal.Titulo,
                    CadUsuarioId = (int)usuario.UsuarioId
                });
            }


            return usuarioSis;
        }

        public UsuarioRequest GetPerfil(IUnitOfWork uow, MyRow request)
        {
            
            var listaGrupo = new List<ActionSelect>();
            var grupo = new CadGrupoFamiliarRow();

            var usuario = uow.Connection.ById<CadUsuarioRow>((int)((UserDefinition)Authorization.UserDefinition).UsuarioId);
            var grupoAtivo = uow.Connection.ById<CadGrupoFamiliarRow>((int)usuario.CadGrupoFamiliarId);
            var grupos = uow.Connection.List<PermissaoUserVisualizarGrupoRow>(PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).ToList();
           
            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };
            
            foreach (var item in grupos)
            {
               
                grupo = uow.Connection.ById<CadGrupoFamiliarRow>((int)item.CadGrupoFamiliarId);

                if (grupo.IsGrupoPessoal == true)
                    item.NomeGrupo = "Pessoal";

                listaGrupo.Add(new ActionSelect()
                {
                    id = item.CadGrupoFamiliarId ?? 0,
                    text = item.NomeGrupo,
                    icon = "",
                    iconColor = ""
                });
            }
            listaGrupo.Add(close);

            var usuarioModel = new UsuarioRequest()
            {
                CadGrupoFamiliarId = usuario.CadGrupoFamiliarId ?? 0,
                Email = usuario.Email,
                Nome = usuario.Nome,
                Telefone = usuario.Telefone,
                NomeGrupoFamiliar = grupoAtivo.Titulo,
                ListaGrupo = listaGrupo
            };

            return usuarioModel;
        
        }
       
        public bool UsuarioIsAdmin(IUnitOfWork uow, MyRow request)
        {
            var assinante = uow.Connection.ById<CadAssinanteRow>((int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId);

            if ((int)((UserDefinition)Authorization.UserDefinition).UsuarioId == assinante.UsuarioAdminId)
                return true;
            else
                return false;
        }

        public TelaPermissaoUsuarioRequest GetUsuarioGerenciamento(IUnitOfWork uow, TelaPermissaoUsuarioRequest request)
        {
            TelaPermissaoUsuarioRequest model = new TelaPermissaoUsuarioRequest();
            model.ListaGrupo = new List<PermissaoGrupo>();
            model.ListaPermissaoGrupo = new List<PermissaoGrupo>();
            var user = uow.Connection.ById<CadUsuarioRow>((int)request.CadUsuarioId);

            if(user != null)
            {
                var listaGrupo = uow.Connection.List<CadGrupoFamiliarRow>(CadGrupoFamiliarRow.Fields.CadAssinanteId == (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId);
                //&& CadGrupoFamiliarRow.Fields.IsGrupoPessoal != 1
                var listaPermissao = uow.Connection.List<PermissaoUserVisualizarGrupoRow>(PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId ==  request.CadUsuarioId);

                foreach (var item in listaGrupo)
                {
                    var itemGrupo = new PermissaoGrupo();
                    var countPerm = listaPermissao.Count(x => x.CadGrupoFamiliarId == item.CadGrupoFamiliarId);

                    if(countPerm > 0)
                    {
                        itemGrupo.Permitido = true;
                        model.ListaPermissaoGrupo.Add(new PermissaoGrupo()
                        {
                            CadGrupoFamiliarId = (int)item.CadGrupoFamiliarId,
                            Permitido = true,
                            NomeGrupo = item.Titulo,
                            CadUsuarioId = request.CadUsuarioId

                        });
                    }
                    else
                    {
                        itemGrupo.Permitido = false;
                    }

                    itemGrupo.NomeGrupo = item.Titulo;
                    itemGrupo.CadUsuarioId = request.CadUsuarioId;

                    itemGrupo.CampoId = "item-" + (int)item.CadGrupoFamiliarId;
                    itemGrupo.CadGrupoFamiliarId = (int)item.CadGrupoFamiliarId;
                    model.ListaGrupo.Add(itemGrupo);

                   
                }
                model.CadUsuarioId = request.CadUsuarioId;
                model.Nome = user.Nome;
                

            }

            return model;
        }

        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, MyRow request)
        {
            var tabelasAux = new TabelasAuxiliaresViewModel();
            tabelasAux.ListaGrupo = new List<ActionSelect>();

            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };

  
            var grupos = connection.List<CadGrupoFamiliarRow>(CadGrupoFamiliarRow.Fields.CadAssinanteId == (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId).ToList();

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


        public TelaPermissaoUsuarioRequest AdicionarGrupoPermissao(IUnitOfWork uow, PermissaoGrupo request)
        {
            TelaPermissaoUsuarioRequest model = new TelaPermissaoUsuarioRequest();

            if (!uow.Connection.Exists<PermissaoUserVisualizarGrupoRow>(PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId == (int)request.CadUsuarioId
                && PermissaoUserVisualizarGrupoRow.Fields.CadGrupoFamiliarId == (int)request.CadGrupoFamiliarId))
            {
                uow.Connection.Insert(new PermissaoUserVisualizarGrupoRow()
                {
                    CadUsuarioId = (int)request.CadUsuarioId,
                    CadGrupoFamiliarId = (int)request.CadGrupoFamiliarId,
                    NomeGrupo = request.NomeGrupo
                });
            }



            return model;
        }

        public TelaPermissaoUsuarioRequest RemoverGrupoPermissao(IUnitOfWork uow, PermissaoGrupo request)
        {
            TelaPermissaoUsuarioRequest model = new TelaPermissaoUsuarioRequest();
            request.Permitido = false;
            if (uow.Connection.Exists<PermissaoUserVisualizarGrupoRow>(PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId == (int)request.CadUsuarioId
                && PermissaoUserVisualizarGrupoRow.Fields.CadGrupoFamiliarId == (int)request.CadGrupoFamiliarId))
            {
                var permissao = uow.Connection.First<PermissaoUserVisualizarGrupoRow>(PermissaoUserVisualizarGrupoRow.Fields.CadUsuarioId == (int)request.CadUsuarioId
                 && PermissaoUserVisualizarGrupoRow.Fields.CadGrupoFamiliarId == (int)request.CadGrupoFamiliarId);

                uow.Connection.DeleteById<PermissaoUserVisualizarGrupoRow>(permissao.PermissaoVisualizar);
            }


            return model;
        }

        public List<MyRow> ListarUsuarios(IUnitOfWork uow, PermissaoGrupo request)
        {
            List<MyRow> listaUsuarios = new List<MyRow>();
            listaUsuarios = uow.Connection.List<CadUsuarioRow>(CadUsuarioRow.Fields.CadGrupoFamiliarCadAssinanteId == (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId);

            return listaUsuarios;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}