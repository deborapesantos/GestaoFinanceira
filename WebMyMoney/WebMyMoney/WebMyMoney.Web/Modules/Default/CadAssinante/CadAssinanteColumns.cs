
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadAssinante")]
    [BasedOnRow(typeof(Entities.CadAssinanteRow), CheckNames = true)]
    public class CadAssinanteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadAssinanteId { get; set; }
        public DateTime DataCriacao { get; set; }
        public Int32 UsuarioAdminId { get; set; }
        [EditLink]
        public String UsarioAdminNome { get; set; }
        public String UsuarioAdminEmail { get; set; }
        public Int32 QdteGrupoFamiliar { get; set; }
        public Boolean Ativo { get; set; }
    }
}