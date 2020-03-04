
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadAssinante"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadAssinanteRow))]
    public class CadAssinanteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadAssinante/CadAssinanteIndex.cshtml");
        }
    }
}