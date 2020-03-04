
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TabTipoReceita"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TabTipoReceitaRow))]
    public class TabTipoReceitaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TabTipoReceita/TabTipoReceitaIndex.cshtml");
        }
    }
}