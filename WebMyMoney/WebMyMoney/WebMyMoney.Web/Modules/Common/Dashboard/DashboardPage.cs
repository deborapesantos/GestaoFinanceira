
namespace WebMyMoney.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;
    using WebMyMoney.Administration;
    using WebMyMoney.Default.Entities;
    using System.Linq;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {

            var model = new DashboardPageModel();
            //using (var connection = SqlConnections.NewFor<CadUsuarioRow>())
            //{
            //    if (Authorization.HasPermission(PermissionKeys.Usuario))
            //    {
            //        var listaContas = connection.List<CadContaRow>(CadContaRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).ToList();
            //        var listaReceitas = connection.List<CadReceitaRow>(CadReceitaRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).ToList(); 
            //        var listaDespesas = connection.List<CadDespesaRow>(CadDespesaRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId).ToList();

            //        model.SaldoContas = listaContas.Sum(x => x.SaldoAtual).GetValueOrDefault();
            //        model.Despesas = listaDespesas.Sum(x => x.ValorTotal).GetValueOrDefault();
            //        model.Receitas = listaReceitas.Sum(x => x.Valor).GetValueOrDefault();
            //    }
            //}
              


            return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
        }
    }
}
