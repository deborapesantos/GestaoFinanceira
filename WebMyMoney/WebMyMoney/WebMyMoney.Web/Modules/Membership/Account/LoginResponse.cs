using Serenity.Services;
using System.Collections.Generic;
using WebMyMoney.Default.Entities;

namespace WebMyMoney.Membership
{
    public class LoginResponse : ServiceResponse
    {
        public CadUsuarioRow Usuario { get; set; }

        public CadGrupoFamiliarRow GrupoFamiliar { get; set; }
        public bool Sucesso { get; internal set; }

        public string Username { get; set; }

        public string Senha { get; set; }
        public string Mensagem { get; internal set; }

        public string UrlRedirect { get; internal set; }

        public LoginResponse()
        {
            this.Usuario = new CadUsuarioRow();
            this.GrupoFamiliar = new CadGrupoFamiliarRow();
        }

    }

    
}