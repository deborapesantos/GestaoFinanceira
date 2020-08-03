using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebMyMoney.Modules.Default.CadDespesa;

namespace WebMyMoney.Modules.Default.CadUsuario
{
    public class TelaPermissaoUsuarioRequest
    {

        public Int32 CadUsuarioId { get; set; }
        public String Nome { get; set; }
        public List<PermissaoGrupo> ListaPermissaoGrupo { get; set; }
        public List<PermissaoGrupo> ListaGrupo { get; set; }

        

    }

    public class PermissaoGrupo
    {
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public bool Permitido { get; set; }
        public string NomeGrupo { get; set; }
        public string CampoId { get; set; }
    }
}