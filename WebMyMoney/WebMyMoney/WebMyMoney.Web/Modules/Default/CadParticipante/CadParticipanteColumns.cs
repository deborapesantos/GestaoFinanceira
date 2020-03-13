
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadParticipante")]
    [BasedOnRow(typeof(Entities.CadParticipanteRow), CheckNames = true)]
    public class CadParticipanteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadParticipanteId { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        [EditLink]
        public String NomeRazaoSocial { get; set; }
        public String CpfCnpj { get; set; }
        public Boolean Ativo { get; set; }
    }
}