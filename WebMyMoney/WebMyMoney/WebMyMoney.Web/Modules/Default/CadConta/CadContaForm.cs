
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadConta")]
    [BasedOnRow(typeof(Entities.CadContaRow), CheckNames = true)]
    public class CadContaForm
    {
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoConta { get; set; }
        public Decimal ValorInicial { get; set; }
        public Decimal SaldoAtual { get; set; }
        public String Titulo { get; set; }
        public Boolean Ativo { get; set; }
        public DateTime DataInicial { get; set; }
    }
}