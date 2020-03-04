
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TabTipoConta")]
    [BasedOnRow(typeof(Entities.TabTipoContaRow), CheckNames = true)]
    public class TabTipoContaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoTabTipoConta { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}