using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMyMoney.Modules.Default.CadReceita
{
    public class CadCartaoCreditoRetrieveRequest : RetrieveRequest
    {
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoCartaoCredito { get; set; }
        public String Titulo { get; set; }
        public String Descricao { get; set; }

        public Int32 DiaVencimentofatura { get; set; }
        public Int32 DiaPagarFatura { get; set; }
        public Int32 DiaFecharFatura { get; set; }
        public String ValorLimiteTotal { get; set; }
        public String ValorLimiteAtual { get; set; }
        public String Saldo { get; set; }
        public Boolean Ativo { get; set; }
    }
}

