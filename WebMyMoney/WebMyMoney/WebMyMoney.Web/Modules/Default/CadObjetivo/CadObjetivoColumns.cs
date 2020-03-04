
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadObjetivo")]
    [BasedOnRow(typeof(Entities.CadObjetivoRow), CheckNames = true)]
    public class CadObjetivoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadObjetivoId { get; set; }
        public String CadContaTitulo { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        public String CadUsuarioNome { get; set; }
        public String CodigoTabTipoObjetivoDescricao { get; set; }
        [EditLink]
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