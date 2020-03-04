
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TabTipoObjetivo")]
    [BasedOnRow(typeof(Entities.TabTipoObjetivoRow), CheckNames = true)]
    public class TabTipoObjetivoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoTabTipoObjetivo { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}