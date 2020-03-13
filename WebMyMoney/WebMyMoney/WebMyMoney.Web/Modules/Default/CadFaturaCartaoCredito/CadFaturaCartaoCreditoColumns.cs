
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadFaturaCartaoCredito")]
    [BasedOnRow(typeof(Entities.CadFaturaCartaoCreditoRow), CheckNames = true)]
    public class CadFaturaCartaoCreditoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadFaturaCartaoCreditoId { get; set; }
        public String CadCartaoCreditoTitulo { get; set; }
        public Int32 MesFaturaVigente { get; set; }
        public DateTime DiaVencimentoFatura { get; set; }
        //public DateTime DataPagamentoFatura { get; set; }
        //public DateTime DataFechamentoFatura { get; set; }
        public Int32 DiaFecharFatura { get; set; }
        //public Decimal ValorParcialFaturaAtual { get; set; }
        public Boolean IsParcelarFatura { get; set; }
        public Int32 NumParcelasFatura { get; set; }
        public Decimal SaldoAnterior { get; set; }
        public Boolean Ativo { get; set; }

        public Boolean Pago;
    }
}