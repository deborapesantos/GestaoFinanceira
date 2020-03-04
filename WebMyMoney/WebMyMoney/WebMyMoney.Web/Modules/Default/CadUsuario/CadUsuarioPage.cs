
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadUsuario"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadUsuarioRow))]
    public class CadUsuarioController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadUsuario/CadUsuarioIndex.cshtml");
        }
    }
}