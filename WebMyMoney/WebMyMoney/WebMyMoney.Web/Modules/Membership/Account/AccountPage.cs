
namespace WebMyMoney.Membership.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using StackExchange.Exceptional;
    using System;
    using System.Web.Mvc;
    using System.Web.Security;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Default.Repositories;

    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(string activated)
        {
            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;
                
                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                    return new ServiceResponse();

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        [HttpPost, JsonFilter]
        public Result<LoginResponse> LoginExt(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();


                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException($"username - Username:{request.Username}");

                var username = request.Username;

                CadUsuarioRow usuario = new CadUsuarioRow();

                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                {
                    using (var connection = SqlConnections.NewFor<CadUsuarioRow>())
                    {
                        usuario = new CadUsuarioRepository().Retrieve(connection, new RetrieveRequest() { EntityId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId }).Entity;
                        connection.Close();
                    }

                    if (usuario.CadUsuarioId == null)
                    {
                        ErrorStore.LogException((new Exception($" Usuário não encontrado - username:{request.Username}")), System.Web.HttpContext.Current, false, false);
                        return new LoginResponse()
                        {
                            Sucesso = false,
                            Mensagem = "Usuário não encontrado"
                        };
                    }

                    return new LoginResponse()
                    {
                        Sucesso = true,
                        Usuario = usuario,
                        Username = request.Username,
                        Senha = request.Password
                       
                    };
                }

                    

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }
    }
}