
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadGrupoFamiliar")]
    [BasedOnRow(typeof(Entities.CadGrupoFamiliarRow), CheckNames = true)]
    public class CadGrupoFamiliarColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadGrupoFamiliarId { get; set; }
        public String CadAssinanteUsarioAdminNome { get; set; }
        public Boolean Ativo { get; set; }
        public DateTime DataCriacao { get; set; }
        [EditLink]
        public String CodigoAcesso { get; set; }
        public Int32 QdteUsuarios { get; set; }
    }
}