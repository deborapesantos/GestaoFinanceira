
namespace WebMyMoney.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.CadObjetivo")]
    [BasedOnRow(typeof(Entities.CadObjetivoRow), CheckNames = true)]
    public class CadObjetivoForm
    {
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CodigoTabTipoObjetivo { get; set; }
        public String Titulo { get; set; }
        public String Descricao { get; set; }
        public Decimal ValorFinal { get; set; }
        public Decimal ValorInicial { get; set; }
        public Decimal ValorAtual { get; set; }
        public DateTime DataFinal { get; set; }
        public DateTime DataInicial { get; set; }
        public Boolean Ativo { get; set; }
    }
}