
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TabTipoCartaoCredito"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TabTipoCartaoCreditoRow))]
    public class TabTipoCartaoCreditoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TabTipoCartaoCredito/TabTipoCartaoCreditoIndex.cshtml");
        }
    }
}