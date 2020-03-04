
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadGrupoFamiliar")]
    [BasedOnRow(typeof(Entities.CadGrupoFamiliarRow), CheckNames = true)]
    public class CadGrupoFamiliarForm
    {
        public Int32 CadAssinanteId { get; set; }
        public Boolean Ativo { get; set; }
        public DateTime DataCriacao { get; set; }
        public String CodigoAcesso { get; set; }
        public Int32 QdteUsuarios { get; set; }
    }
}