
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TabTipoConta"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TabTipoContaRow))]
    public class TabTipoContaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TabTipoConta/TabTipoContaIndex.cshtml");
        }
    }
}