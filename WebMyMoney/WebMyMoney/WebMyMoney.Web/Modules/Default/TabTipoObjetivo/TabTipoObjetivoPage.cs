
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TabTipoObjetivo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TabTipoObjetivoRow))]
    public class TabTipoObjetivoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TabTipoObjetivo/TabTipoObjetivoIndex.cshtml");
        }
    }
}