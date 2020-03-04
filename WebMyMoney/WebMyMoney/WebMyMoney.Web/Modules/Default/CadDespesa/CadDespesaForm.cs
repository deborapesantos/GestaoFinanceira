
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadDespesa")]
    [BasedOnRow(typeof(Entities.CadDespesaRow), CheckNames = true)]
    public class CadDespesaForm
    {
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoDespesa { get; set; }
        public String Titulo { get; set; }
        public DateTime DataPagamento { get; set; }
        public DateTime DataCriacao { get; set; }
        public Boolean IsFixo { get; set; }
        public DateTime DataVencimento { get; set; }
        public Decimal ValorTotal { get; set; }
        public Decimal MultasJuros { get; set; }
        public Int32 DataFixaVencimento { get; set; }
        public Boolean Pago { get; set; }
        public Boolean Ativo { get; set; }
        public Decimal Descontos { get; set; }
    }
}