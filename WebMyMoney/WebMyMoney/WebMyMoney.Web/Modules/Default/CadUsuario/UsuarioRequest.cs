using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMyMoney.Modules.Default.CadDespesa;

namespace WebMyMoney.Modules.Default.CadUsuario
{
    public class UsuarioRequest
    {

        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 UserId { get; set; }
        public String Nome { get; set; }

        public String NomeGrupoFamiliar { get; set; }
        public String NomeUsuario { get; set; }

        public String Password { get; set; }
        public String Telefone { get; set; }
        public DateTime DataCriacao { get; set; }
        public String Email { get; set; }
        public Boolean Ativo { get; set; }

        public List<ActionSelect> ListaGrupo { get; set; }


    }
}