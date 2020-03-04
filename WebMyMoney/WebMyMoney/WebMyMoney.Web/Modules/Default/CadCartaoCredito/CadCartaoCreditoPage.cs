
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadCartaoCredito"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadCartaoCreditoRow))]
    public class CadCartaoCreditoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadCartaoCredito/CadCartaoCreditoIndex.cshtml");
        }
    }
}