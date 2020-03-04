
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadConta")]
    [BasedOnRow(typeof(Entities.CadContaRow), CheckNames = true)]
    public class CadContaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadContaId { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        public String CadUsuarioNome { get; set; }
        public String CodigoTabTipoContaDescricao { get; set; }
        public Decimal ValorInicial { get; set; }
        public Decimal SaldoAtual { get; set; }
        [EditLink]
        public String Titulo { get; set; }
        public Boolean Ativo { get; set; }
        public DateTime DataInicial { get; set; }
    }
}