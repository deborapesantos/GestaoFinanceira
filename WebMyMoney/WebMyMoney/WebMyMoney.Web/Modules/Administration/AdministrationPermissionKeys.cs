
using Serenity.Extensibility;
using System.ComponentModel;

namespace WebMyMoney.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Usuário Geral")]
        public const string General = "Usuario:General";

        [Description("Usuário Padrao")]
        public const string Usuario = "Usuario:padrao";

        [Description("Usuário Visualizar")]
        public const string Visualizar = "Usuario:Visualizar";

        [Description("Usuário Editar")]
        public const string Editar = "Usuario:Editar";

    }
}
