
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadCartaoCredito")]
    [BasedOnRow(typeof(Entities.CadCartaoCreditoRow), CheckNames = true)]
    public class CadCartaoCreditoForm
    {
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoCartaoCredito { get; set; }
        public String Titulo { get; set; }
        public String Descricao { get; set; }

        public DateTime DiaVencimentofatura { get; set; }
        public Int32 DiaPagarFatura { get; set; }
        public Int32 DiaFecharFatura { get; set; }
        public Decimal ValorLimiteTotal { get; set; }
        public Decimal ValorLimiteAtual { get; set; }
        public Decimal Saldo { get; set; }
        public Boolean Ativo { get; set; }
    }
}