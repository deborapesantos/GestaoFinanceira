using Serenity.Navigation;
using MyPages = WebMyMoney.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Cad Assinante", typeof(MyPages.CadAssinanteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Cartao Credito", typeof(MyPages.CadCartaoCreditoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Conta", typeof(MyPages.CadContaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Despesa", typeof(MyPages.CadDespesaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Grupo Familiar", typeof(MyPages.CadGrupoFamiliarController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Objetivo", typeof(MyPages.CadObjetivoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Receita", typeof(MyPages.CadReceitaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Cad Usuario", typeof(MyPages.CadUsuarioController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tab Tipo Cartao Credito", typeof(MyPages.TabTipoCartaoCreditoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tab Tipo Conta", typeof(MyPages.TabTipoContaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tab Tipo Despesa", typeof(MyPages.TabTipoDespesaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tab Tipo Objetivo", typeof(MyPages.TabTipoObjetivoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tab Tipo Receita", typeof(MyPages.TabTipoReceitaController), icon: null)]