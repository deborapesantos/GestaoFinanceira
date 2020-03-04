
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TabTipoConta")]
    [BasedOnRow(typeof(Entities.TabTipoContaRow), CheckNames = true)]
    public class TabTipoContaForm
    {
        public String Descricao { get; set; }
    }
}