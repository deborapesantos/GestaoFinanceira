
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadFaturaCartaoCredito")]
    [BasedOnRow(typeof(Entities.CadFaturaCartaoCreditoRow), CheckNames = true)]
    public class CadFaturaCartaoCreditoForm
    {
        public Int32 CadCartaoCreditoId { get; set; }
        public Int32 MesFaturaVigente { get; set; }
        public DateTime DiaVencimentoFatura { get; set; }
        public DateTime DataPagamentoFatura { get; set; }
        public DateTime DataFechamentoFatura { get; set; }
        public Int32 DiaFecharFatura { get; set; }
        public Decimal ValorParcialFaturaAtual { get; set; }
        public Boolean IsParcelarFatura { get; set; }
        public Int32 NumParcelasFatura { get; set; }
        public Decimal SaldoAnterior { get; set; }
        
        [DefaultValue(true)]
        public Boolean Ativo { get; set; }

        [DefaultValue(false)]
        public Boolean Pago { get; set; }
    }
}