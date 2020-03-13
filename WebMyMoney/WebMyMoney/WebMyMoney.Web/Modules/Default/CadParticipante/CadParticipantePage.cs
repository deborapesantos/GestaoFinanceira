
namespace WebMyMoney.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CadParticipante"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CadParticipanteRow))]
    public class CadParticipanteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CadParticipante/CadParticipanteIndex.cshtml");
        }
    }
}