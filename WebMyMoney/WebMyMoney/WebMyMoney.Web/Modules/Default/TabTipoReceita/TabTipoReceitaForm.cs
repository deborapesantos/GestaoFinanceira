
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TabTipoReceita")]
    [BasedOnRow(typeof(Entities.TabTipoReceitaRow), CheckNames = true)]
    public class TabTipoReceitaForm
    {
        public String Descricao { get; set; }
    }
}