using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using WebMyMoney.Common;

namespace GestaoContratos.Modules.Utils
{
    public class EnviarEmail : Mail
    {

        /// <summary>
        /// Envia um email do tipo contato 
        /// </summary>
        /// <param name="ContatoMail">Objeto de contato que será enviado o email</param>
        public EnviarEmail(ContatoMail contato) : base(true)
        {
            ModeloHtmlParametro = new Dictionary<string, string>();

            string ModeloMalaDiretaEmail = ConfigurationManager.AppSettings.Get("ModeloEmailContato");
            if (string.IsNullOrEmpty(ModeloMalaDiretaEmail))
                throw new Exception("Erro interno. Caminho do modelo da Modelo Email Contato não definido, por favor entre em contato com o suporte.");

            ModeloHtmlParametro.Add("MUNICIPIO", "S&atilde;o Paulo");
            ModeloHtmlParametro.Add("DIA", DateTime.Today.Day.ToString());
            ModeloHtmlParametro.Add("MES", System.Globalization.DateTimeFormatInfo.CurrentInfo.GetMonthName(DateTime.Today.Month).ToLower());
            ModeloHtmlParametro.Add("ANO", DateTime.Today.Year.ToString());
            ModeloHtmlParametro.Add("NOME", (!String.IsNullOrEmpty(contato.Nome) ? contato.Nome : ""));
            ModeloHtmlParametro.Add("TITULO", contato.Titulo); //"Mensagem incluída no site contratodeparceria.com.br:");
            ModeloHtmlParametro.Add("MENSAGEM", contato.Mensagem);
            ModeloHtmlParametro.Add("EMAILEMITENTE", (!String.IsNullOrEmpty(contato.Email) ? contato.Email : ""));
            ModeloHtmlParametro.Add("TELEFONEEMITENTE", (!String.IsNullOrEmpty(contato.Telefone) ? contato.Telefone : ""));

            ModeloHtmlPath = Path.Combine(System.Web.HttpContext.Current.Request.PhysicalApplicationPath, ModeloMalaDiretaEmail);
            Assunto = contato.Titulo;
            EnableSsl = true;

            //caso seja para cliente
            if (contato.TipoDestino == enumTipoDestino.Cliente)
            {
                AdicionarDestinatario(TipoDestinatario.Para, contato.Email);
            }
            //sindicato
            else
            {
                AdicionarDestinatario(TipoDestinatario.Para, ConfigurationManager.AppSettings.Get("EmailAdmin"));
            }


        }


    }
}