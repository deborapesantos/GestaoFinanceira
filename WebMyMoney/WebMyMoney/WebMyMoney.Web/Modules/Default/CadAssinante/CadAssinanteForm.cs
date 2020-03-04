
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadAssinante")]
    [BasedOnRow(typeof(Entities.CadAssinanteRow), CheckNames = true)]
    public class CadAssinanteForm
    {
        
        public DateTime DataCriacao { get; set; }
        public String Telefone { get; set; }

        public String UsarioAdminNome { get; set; }
        public String UsuarioAdminEmail { get; set; }

        [Required(true)]
        public String Username { get; set; }

        [PasswordEditor, Required(true)]
        public String Senha { get; set; }

        [DefaultValue(1), ReadOnly(true)]
        public Int32 QdteGrupoFamiliar { get; set; }

        [DefaultValue(true), ReadOnly(true)]
        public Boolean Ativo { get; set; }
      
        [DefaultValue(1),ReadOnly(true)]
        public Int32 UsuarioAdminId { get; set; }
    }
}