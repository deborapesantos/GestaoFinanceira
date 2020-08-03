using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMyMoney.Default.Entities;

namespace WebMyMoney.Modules.Default.CadDespesa
{
    public class TabelasAuxiliaresViewModel
    {
        public List<ActionSelect> ListaConta { get; set; }
        public List<ActionSelect> ListaCartaoCredito { get; set; }
        public List<ActionSelect> ListaFaturaCartaoCredito { get; set; }
        public List<ActionSelect> ListaParticipante { get; set; }
        public List<ActionSelect> ListaTipoDespesa { get; set; }

        public List<ActionSelect> ListaTipoConta { get; set; }

        public List<ActionSelect> ListaTipCartaoCredito { get; set; }
        public List<ActionSelect> ListaTipoReceita { get; set; }
        public List<ActionSelect> ListaGrupo { get; set; }

        public CadDespesaRow despesa { get; set; }

        public CadReceitaRow receita { get; set; }
    }

    public class ActionSelect
    {
       public string text { get; set; }
        public string icon { get; set; }
        public string iconColor { get; set; }
        public int id { get; set; }

        public int idFilter { get; set; }

    }
}