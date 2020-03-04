
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TabTipoReceita")]
    [BasedOnRow(typeof(Entities.TabTipoReceitaRow), CheckNames = true)]
    public class TabTipoReceitaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoTabTipoReceita { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}