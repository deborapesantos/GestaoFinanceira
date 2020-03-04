
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadConta"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadContaRow))]
    public class CadContaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadConta/CadContaIndex.cshtml");
        }
    }
}