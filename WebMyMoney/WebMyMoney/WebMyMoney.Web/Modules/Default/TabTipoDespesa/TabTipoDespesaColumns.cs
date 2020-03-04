
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TabTipoDespesa")]
    [BasedOnRow(typeof(Entities.TabTipoDespesaRow), CheckNames = true)]
    public class TabTipoDespesaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoTabTipoDespesa { get; set; }
        [EditLink]
        public String Descricao { get; set; }
        public String Icone { get; set; }
    }
}