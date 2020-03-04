
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadReceita"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadReceitaRow))]
    public class CadReceitaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadReceita/CadReceitaIndex.cshtml");
        }
    }
}