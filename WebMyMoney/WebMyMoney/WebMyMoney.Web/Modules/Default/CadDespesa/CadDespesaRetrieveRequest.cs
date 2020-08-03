using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMyMoney.Modules.Default.CadDespesa
{
    public class CadDespesaRetrieveRequest : RetrieveRequest
    {
        public Int32 CadDespesaId { get; set; }
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CadFaturaCartaoCreditoId { get; set; }
        public Int32 CodigoTabTipoDespesa { get; set; }

        public Int32 CadParticipanteId { get; set; }
        public String Titulo { get; set; }

        public DateTime DataPagamento { get; set; }

        public DateTime DataCriacao { get; set; }
        public Boolean IsFixo { get; set; }
        public Int32 DataFixaVencimento { get; set; }
        public Boolean IsParcelado { get; set; }

        public Int32 QdteParcelas { get; set; }
        public DateTime DataVencimento { get; set; }
        public string ValorTotal { get; set; }

        public string CodigoTabTipoDespesaDescricao { get; set; }
        public string CadContaTitulo { get; set; }
        
        public Decimal MultasJuros { get; set; }
        public Boolean Pago { get; set; }
        public Boolean Ativo { get; set; }
        public Decimal Imposto { get; set; }
        public Decimal Descontos { get; set; }
    }
}

