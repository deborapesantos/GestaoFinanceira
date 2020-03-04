
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadUsuario")]
    [BasedOnRow(typeof(Entities.CadUsuarioRow), CheckNames = true)]
    public class CadUsuarioColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadUsuarioId { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        public String UserUsername { get; set; }
        [EditLink]
        public String Nome { get; set; }
        public String Telefone { get; set; }
        public DateTime DataCriacao { get; set; }
        public String Email { get; set; }
        public Boolean Ativo { get; set; }
    }
}