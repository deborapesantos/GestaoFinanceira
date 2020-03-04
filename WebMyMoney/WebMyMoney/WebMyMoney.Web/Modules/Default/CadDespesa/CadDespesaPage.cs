
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadDespesa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadDespesaRow))]
    public class CadDespesaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadDespesa/CadDespesaIndex.cshtml");
        }
    }
}