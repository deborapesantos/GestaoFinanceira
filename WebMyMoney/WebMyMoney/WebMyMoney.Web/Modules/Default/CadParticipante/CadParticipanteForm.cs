
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadParticipante")]
    [BasedOnRow(typeof(Entities.CadParticipanteRow), CheckNames = true)]
    public class CadParticipanteForm
    {
        public Int32 CadGrupoFamiliarId { get; set; }
        public String NomeRazaoSocial { get; set; }
        public String CpfCnpj { get; set; }
        public Boolean Ativo { get; set; }
    }
}