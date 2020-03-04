
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadGrupoFamiliar"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadGrupoFamiliarRow))]
    public class CadGrupoFamiliarController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadGrupoFamiliar/CadGrupoFamiliarIndex.cshtml");
        }
    }
}