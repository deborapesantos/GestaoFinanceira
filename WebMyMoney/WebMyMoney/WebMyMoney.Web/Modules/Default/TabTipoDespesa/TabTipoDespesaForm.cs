
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TabTipoDespesa")]
    [BasedOnRow(typeof(Entities.TabTipoDespesaRow), CheckNames = true)]
    public class TabTipoDespesaForm
    {
        public String Descricao { get; set; }
        public String Icone { get; set; }
    }
}