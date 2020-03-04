using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GestaoContratos.Modules.Utils
{
    public class ContatoMail
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Mensagem { get; set; }
        public string Titulo { get; set; }
        public enumTipoDestino TipoDestino { get; set; }
    }

    public enum enumTipoDestino
    {
       Cliente,
       Sindicato
    }
}