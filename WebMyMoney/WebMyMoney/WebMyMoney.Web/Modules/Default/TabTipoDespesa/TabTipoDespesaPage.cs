
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TabTipoDespesa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TabTipoDespesaRow))]
    public class TabTipoDespesaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TabTipoDespesa/TabTipoDespesaIndex.cshtml");
        }
    }
}