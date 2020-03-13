
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadCartaoCredito")]
    [BasedOnRow(typeof(Entities.CadCartaoCreditoRow), CheckNames = true)]
    public class CadCartaoCreditoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadCartaoCreditoId { get; set; }
        public String CadContaTitulo { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        public String CadUsuarioNome { get; set; }
        public String CodigoTabTipoCartaoCreditoDescricao { get; set; }
        [EditLink]
        public String Titulo { get; set; }
        public String Descricao { get; set; }
        //public DateTime DataPagamentoFatura { get; set; }
        public Int32 DiaPagarFatura { get; set; }
        //public DateTime DataFechamentoFatura { get; set; }
        public Int32 DiaFecharFatura { get; set; }
        public Decimal ValorLimiteTotal { get; set; }
        public Decimal ValorLimiteAtual { get; set; }
        //public Decimal ValorParcialFaturaAtual { get; set; }
        public Decimal Saldo { get; set; }
        public Boolean Ativo { get; set; }
    }
}