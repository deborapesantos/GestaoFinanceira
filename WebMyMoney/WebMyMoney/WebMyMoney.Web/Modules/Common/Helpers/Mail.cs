using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;

namespace WebMyMoney.Common
{
    #region Enum
    public enum TipoDestinatario
    {
        Para,
        ComCopia,
        ComCopiaOculta
    }
    #endregion

    public abstract class Mail
    {
        #region Atributos ou Variaveis
        /// <summary>
        /// The message to be sent using the SmtpClient class. This class exposes many properties specific to the message 
        /// like To, CC, Bcc, Subject, and Body properties that corresponds to the message fields.
        /// </summary>
        private MailMessage EmailMensagem;
        #endregion

        #region Propriedades
        /// <summary>
        /// Network: (default)
        ///     The message is sent via the network to the SMTP server.
        /// PickupDirectoryFromIis:
        ///     The message is copied to the mail default directory of the Internet Information Services (IIS).
        /// SpecifiedPickupDirectory:
        ///     The message is copied to the directory specified by the property PickupDirectoryLocation.
        /// </summary>
        private string MailDeliveryMethod { get; set; }
        /// <summary>
        /// Value set if MailDeliveryMethod = SpecifiedPickupDirectory
        /// </summary>
        private string MailPickupDirectoryLocation { get; set; }
        /// <summary>
        /// Servidor SMTP para envio de email
        /// </summary>
        public string MailHost { get; set; }
        /// <summary>
        /// Port number: Usually 25, and sometimes 465. Depends on server�s configuration.
        /// </summary>
        public int MailPort { get; set; }
        /// <summary>
        /// User Mail accesss
        /// </summary>
        public string MailUser { get; set; }
        /// <summary>
        /// Password User mail access
        /// </summary>
        public string MailPassword { get; set; }
        /// <summary>
        /// Usu�rio par conex�o no SendGrid
        /// </summary>
        public string UserSendGrid { get; set; }
        /// <summary>
        /// You need to know if the server requires a SSL (Secure Socket Layer) connection or not. 
        /// To be honest, most servers require SSL connections.
        /// </summary>
        public bool EnableSsl { get; set; }
        /// <summary>
        /// Get or Set emissor do email.
        /// </summary>
        private MailAddress De
        {
            get { return EmailMensagem.From; }
            set { EmailMensagem.From = value; }
        }
        /// <summary>
        /// Get or Set assunto do email.
        /// </summary>
        public string Assunto
        {
            get { return EmailMensagem.Subject; }
            set { EmailMensagem.Subject = value; }
        }
        /// <summary>
        /// Get or Set corpo no formato somente texto do email.
        /// </summary>
        public string CorpoTexto { get; set; }
        /// <summary>
        /// Get or Set corpo no formato HTML do email.
        /// </summary>
        public string CorpoHTML { get; set; }
        /// <summary>
        /// Dicionary de strings com os parametros do email 
        /// </summary>
        public Dictionary<string, string> ModeloHtmlParametro { get; set; }
        /// <summary>
        /// Diretorio do modelo HTML de email padrao - Caminho Fisico da Aplicacao+PastaModelos do webconfig+nomeModelo.html
        /// </summary>
        public string ModeloHtmlPath { get; set; }

        #endregion

        #region Construtor
        /// <summary>
        /// Construtor para envio de E-mail.
        /// </summary>
        /// <param name="parametroWebConfig">Se informar "false", os parametros de configura��o dever�o estar preenchidos:
        ///                                 MailHost / MailPort / MailUser / MailPassword 
        ///                                 Caso seja "true" utilizara do webConfig </param>
        public Mail(bool parametroWebConfig)
        {
            EmailMensagem = new MailMessage();
            MailDeliveryMethod = "Network";

            if (parametroWebConfig)
            {
                this.MailHost = string.IsNullOrEmpty(ConfigurationManager.AppSettings["MailHost"].ToString()) ? string.Empty : ConfigurationManager.AppSettings["MailHost"].ToString();
                this.MailPort = string.IsNullOrEmpty(ConfigurationManager.AppSettings["MailPort"].ToString()) ? 0 : int.Parse(ConfigurationManager.AppSettings["MailPort"].ToString());
                this.MailUser = string.IsNullOrEmpty(ConfigurationManager.AppSettings["MailUser"].ToString()) ? string.Empty : ConfigurationManager.AppSettings["MailUser"].ToString(); //.Replace("@", "=");
                this.MailPassword = string.IsNullOrEmpty(ConfigurationManager.AppSettings["MailPassword"].ToString()) ? string.Empty : ConfigurationManager.AppSettings["MailPassword"].ToString().Replace("_", "&");
                this.UserSendGrid = string.IsNullOrEmpty(ConfigurationManager.AppSettings["MailSendGrid"].ToString()) ? string.Empty : ConfigurationManager.AppSettings["MailSendGrid"];
            }
        }

        #endregion

        #region M�todos
        /// <summary>
        /// Enviar o email.
        /// </summary>
        /// <returns>Envio com sucesso ou falha do email.</returns>
        public bool Enviar()
        {
            SmtpClient smtp = new SmtpClient
            {
                EnableSsl = EnableSsl
            };

            //Seleciona m�todo de enivo
            switch (this.MailDeliveryMethod)
            {
                case "Network":
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    break;
                case "PickupDirectoryFromIis":
                    smtp.DeliveryMethod = SmtpDeliveryMethod.PickupDirectoryFromIis;
                    break;
                case "SpecifiedPickupDirectory":
                    smtp.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;
                    break;
                default:
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    break;
            }

            //Preenche o SmtpClient de acordo com o m�todo de envio
            if (smtp.DeliveryMethod == SmtpDeliveryMethod.Network)
            {
                if (string.IsNullOrEmpty(this.MailHost))
                    throw new ArgumentException("N�o foi informado e-mail Host");

                smtp.Host = this.MailHost;
                smtp.Port = this.MailPort;
            }
            else if (smtp.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory)
            {
                smtp.PickupDirectoryLocation = MailPickupDirectoryLocation;
            }

            //Preenche as credencias de acesso ao servidor para envio do email
            if (!string.IsNullOrEmpty(this.MailUser))
            {
                string user = this.MailUser;

                if (MailHost.Contains("smtp.sendgrid.net"))
                {
                    user = this.UserSendGrid;
                }

                smtp.Credentials = new NetworkCredential(user, this.MailPassword);
            }
            else
                smtp.UseDefaultCredentials = false;

            //Verifica se existe destinat�rio no email
            if (this.EmailMensagem.To.Count == 0 && this.EmailMensagem.CC.Count == 0 && this.EmailMensagem.Bcc.Count == 0)
            {
                throw new ArgumentException("N�o foi informado e-mail de destinat�rio");
            }

            
            //Verifica se existe From
            if (this.EmailMensagem.From == null)
            {
                AdicionarRemetente("", MailUser);
                //throw new ArgumentException("N�o foi informado e-mail do remetente!");
            }

            //Verifica se existe Assunto
            if (string.IsNullOrEmpty(this.EmailMensagem.Subject))
            {
                throw new ArgumentException("N�o foi informado assunto!");
            }

            if(!this.ModeloHtmlParametro.ContainsKey("titulo"))
                this.ModeloHtmlParametro.Add("titulo", this.EmailMensagem.Subject);


            if (!string.IsNullOrEmpty(this.ModeloHtmlPath))
            {
                if (!File.Exists(this.ModeloHtmlPath))
                    throw new ArgumentException("O arquivo modelo HTML informado n�o existe.");

                this.CorpoHTML = GetBodyFromModelo(this.ModeloHtmlParametro, this.ModeloHtmlPath);
            }

            //Verifica se Existe Corpo do email
            if (string.IsNullOrEmpty(this.CorpoHTML) && string.IsNullOrEmpty(this.CorpoTexto))
            {
                throw new ArgumentException("N�o foi informado corpo da mensagem!");
            }

            //Se corpo HTML preenchido seta "IsBodyHtml = true"
            if (!string.IsNullOrEmpty(this.CorpoHTML))
            {
                AlternateView view = AlternateView.CreateAlternateViewFromString(this.CorpoHTML, new ContentType("text/html; charset=UTF-8"));
                EmailMensagem.AlternateViews.Add(view);
                EmailMensagem.Body = this.CorpoHTML;
                EmailMensagem.IsBodyHtml = true;
            }
            else
            {
                EmailMensagem.IsBodyHtml = false;
            }


            if (!string.IsNullOrEmpty(this.CorpoTexto))
            {
                AlternateView view = AlternateView.CreateAlternateViewFromString(this.CorpoTexto, new ContentType("text/plain; charset=UTF-8"));
                EmailMensagem.AlternateViews.Add(view);
                if (!EmailMensagem.IsBodyHtml)
                    EmailMensagem.Body = this.CorpoTexto;
            }

            //Tenta enviar o email
            try
            {
                smtp.Send(this.EmailMensagem);
            }
            catch (Exception)
            {
                string sistema = string.Format("{0} | {1} | {2} ", "Useful.Framework", "Mail.cs", "Enviar()");

                return false;
            }
            EmailMensagem.Dispose();
            return true;
        }

        /// <summary>
        /// Adiciona o remetente ao email.
        /// </summary>
        /// <param name="nome"></param>
        /// <param name="email"></param>
        public void AdicionarRemetente(string nome, string email)
        {
            this.De = new MailAddress(email, nome, Encoding.GetEncoding("utf-8"));
        }

        /// <summary>
        /// Adiciona destinat�rios extras para o email.
        /// </summary>
        /// <param name="tipoDestinatario">Tipo do destinat�rio.</param>
        /// <param name="email">Endere�o do destinat�rio do email.</param>
        public void AdicionarDestinatario(TipoDestinatario tipoDestinatario, string email)
        {
            AdicionarDestinatario(tipoDestinatario, string.Empty, email);
        }

        /// <summary>
        /// Adiciona destinat�rios extras para o email.
        /// </summary>
        /// <param name="tipoDestinatario">Tipo do destinat�rio.</param>
        /// <param name="nome">Nome do destinat�rio.</param>
        /// <param name="email">Endere�o do destinat�rio do email.</param>
        public void AdicionarDestinatario(TipoDestinatario tipoDestinatario, string nome, string email)
        {
            MailAddress endereco;

            //    endereco = new MailAddress(email, nome, Encoding.GetEncoding("utf-8")); //iso-8859-3 (Latin 3 (ISO)) //us-ascii
            //    endereco = new MailAddress(email, nome, Encoding.GetEncoding("ISO-8859-1")); //iso-8859-3 (Latin 3 (ISO)) //us-ascii
            //    endereco = new MailAddress(email, nome, Encoding.GetEncoding("ISO-8859-3")); //iso-8859-3 (Latin 3 (ISO)) //us-ascii
            //    endereco = new MailAddress(email, nome, Encoding.GetEncoding("us-ascii")); //iso-8859-3 (Latin 3 (ISO)) //us-ascii

            endereco = new MailAddress(email, nome, Encoding.GetEncoding("utf-8"));
            //verifica se email � v�lido
            // https://stackoverflow.com/questions/1365407/c-sharp-code-to-validate-email-address
            if (email != endereco.Address)
            {
                throw new Exception($"Email {email} n�o � v�lido.");
            }

            switch (tipoDestinatario)
            {
                case TipoDestinatario.Para:
                    EmailMensagem.To.Add(endereco);
                    break;
                case TipoDestinatario.ComCopia:
                    EmailMensagem.CC.Add(endereco);
                    break;
                case TipoDestinatario.ComCopiaOculta:
                    EmailMensagem.Bcc.Add(endereco);
                    break;
            }
            //}
        }

        /// <summary>
        /// Adiciona anexo.
        /// </summary>
        /// <param name="path">Caminho do anexo.</param>
        public void AdicionarAnexo(string path)
        {
            var anexo = new Attachment(path);
            EmailMensagem.Attachments.Add(anexo);
        }

        //public void AdicionarLogoAssinante(string filePath)
        //{
        //    LinkedResource res = new LinkedResource(filePath)
        //    {
        //        ContentId = "logoAssinante"
        //    };
        //    AlternateView alternateView = AlternateView.CreateAlternateViewFromString(EmailMensagem.Body, null, "image/png");
        //    alternateView.LinkedResources.Add(res);
        //    EmailMensagem.AlternateViews.Add(alternateView);
        //}


        #endregion

        /// <summary>
        /// Recebe parametros seguindo o Modelo HTML de Email e retorna o body html formatado
        /// </summary>
        /// <param name="pParametrosBody">Dicionario key,value, onde key � o nome da variavel do modelo html, e value o valor a ser atribuido a ela</param>
        /// <param name="pCaminhoModelo">Diretorio do modelo HTML de email padr�o - Caminho Fisico da Aplicacao+PastaModelos do webconfig+nomeModelo.html</param>
        public static string GetBodyFromModelo(Dictionary<string, string> pParametros, string pCaminhoModelo)
        {
            string htmlModelo = string.Empty;
            try
            {
                if (!File.Exists(pCaminhoModelo))
                    throw new Exception($"Arquivo html de modelo do email n�o encontrado ({pCaminhoModelo}).");

                using (StreamReader sr = new StreamReader(pCaminhoModelo))
                {
                    htmlModelo = sr.ReadToEnd().Replace("\r\n", "").Replace("\t", "");
                }

                foreach (var parametro in pParametros)
                {
                    string chave = parametro.Key;
                    string valor = parametro.Value;
                    //htmlModelo = htmlModelo.Replace("{" + chave + "}", valor);
                    htmlModelo = htmlModelo.Replace(string.Format("[{0}]", chave), valor);

                }
                if (!pParametros.ContainsKey("callbackUrl"))
                {
                    int startIndex = htmlModelo.IndexOf("<!--link-->");
                    int lastIndex = htmlModelo.IndexOf("<!--endLink-->", startIndex);
                    htmlModelo = htmlModelo.Remove(startIndex, lastIndex - startIndex);
                }

            }
            catch (Exception ex)
            {
                string mensagemErro;
                if (ex.InnerException != null)
                {
                    if (ex.InnerException.InnerException != null)
                        mensagemErro = ex.InnerException.InnerException.Message;
                    else
                        mensagemErro = ex.InnerException.Message;
                }
                else
                    mensagemErro = ex.Message;

                string sistema = string.Format("{0} | {1} | {2} ", "Useful.Framework", "Mail.cs", "GetBodyFromModelo()");

            }

            return htmlModelo;
        }

        /// <summary>
        /// Retorna se um email � v�lido.get 
        /// </summary>
        /// <param name="emailaddress">Email para teste</param>
        /// <returns>Retorna true caso a convers�o seja bem-sucedida.</returns>
        /// https://stackoverflow.com/questions/1365407/c-sharp-code-to-validate-email-address
        public static bool isEmailValido(string email)
        {
            try
            {
                MailAddress addr = new MailAddress(email);
                return addr.Address == email;
            }
            catch {
                return false;
            }
        }

    }
}
