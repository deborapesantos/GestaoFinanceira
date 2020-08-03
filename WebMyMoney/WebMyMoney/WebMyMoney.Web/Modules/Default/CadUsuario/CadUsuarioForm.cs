
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadUsuario")]
    [BasedOnRow(typeof(Entities.CadUsuarioRow), CheckNames = true)]
    public class CadUsuarioForm
    {
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 UserId { get; set; }
        public String Nome { get; set; }
        public String Telefone { get; set; }
        public DateTime DataCriacao { get; set; }
        public String Email { get; set; }
        public Boolean Ativo { get; set; }
    }
}