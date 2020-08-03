using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMyMoney.Modules.Default.CadReceita
{
    public class CadContaRetrieveRequest : RetrieveRequest
    {
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoConta { get; set; }
        public String ValorInicial { get; set; }
        public String SaldoAtual { get; set; }
        public String Titulo { get; set; }
        public Boolean Ativo { get; set; }
        public DateTime DataInicial { get; set; }
    }
}

