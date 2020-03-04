
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadDespesa")]
    [BasedOnRow(typeof(Entities.CadDespesaRow), CheckNames = true)]
    public class CadDespesaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadDespesaId { get; set; }
        public String CadContaTitulo { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        public String CadUsuarioNome { get; set; }
        public String CodigoTabTipoDespesaDescricao { get; set; }
        [EditLink]
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