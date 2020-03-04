
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadReceita")]
    [BasedOnRow(typeof(Entities.CadReceitaRow), CheckNames = true)]
    public class CadReceitaForm
    {
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadContaId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoReceita { get; set; }
        public String Titulo { get; set; }
        public String Descricao { get; set; }
        public DateTime DataRecebimento { get; set; }
        public DateTime DataCriacao { get; set; }
        public Boolean IsFixo { get; set; }
        public Int32 DataFixaRecebimento { get; set; }
        public Decimal Valor { get; set; }
        public Boolean Recebido { get; set; }
        public Boolean Ativo { get; set; }
    }
}