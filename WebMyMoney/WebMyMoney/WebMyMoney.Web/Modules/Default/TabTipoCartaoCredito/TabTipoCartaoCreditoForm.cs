
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TabTipoCartaoCredito")]
    [BasedOnRow(typeof(Entities.TabTipoCartaoCreditoRow), CheckNames = true)]
    public class TabTipoCartaoCreditoForm
    {
        public String Descricao { get; set; }
        public String Icone { get; set; }
    }
}