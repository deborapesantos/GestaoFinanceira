
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TabTipoObjetivo")]
    [BasedOnRow(typeof(Entities.TabTipoObjetivoRow), CheckNames = true)]
    public class TabTipoObjetivoForm
    {
        public String Descricao { get; set; }
    }
}