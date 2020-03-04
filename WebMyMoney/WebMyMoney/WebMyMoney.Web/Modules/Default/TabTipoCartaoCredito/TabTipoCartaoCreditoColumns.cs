
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TabTipoCartaoCredito")]
    [BasedOnRow(typeof(Entities.TabTipoCartaoCreditoRow), CheckNames = true)]
    public class TabTipoCartaoCreditoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CodigoTabTipoCartaoCredito { get; set; }
        [EditLink]
        public String Descricao { get; set; }
        public String Icone { get; set; }
    }
}