
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadObjetivo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadObjetivoRow))]
    public class CadObjetivoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadObjetivo/CadObjetivoIndex.cshtml");
        }
    }
}