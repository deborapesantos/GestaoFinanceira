using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebMyMoney.Modules.Default.CadReceita
{
    public class CadReceitaRetrieveRequest : RetrieveRequest
    {
        public Int32 CadReceitaId { get; set; }
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoReceita { get; set; }
        public String Titulo { get; set; }
        public String Descricao { get; set; }
        public DateTime DataRecebimento{ get; set; }
        public DateTime DataCriacao { get; set; }
        public Int32 DataFixaRecebimento { get; set; }
        public Boolean IsFixo { get; set; }

        public Int32 QdteParcelas { get; set; }
        public string Valor { get; set;}
        public Boolean Recebido { get; set; }
        public Decimal Juros { get; set; }
        public Decimal Rendimento { get; set; }
        public Decimal Imposto { get; set; }
        public Boolean Ativo { get; set; }
    }
}

