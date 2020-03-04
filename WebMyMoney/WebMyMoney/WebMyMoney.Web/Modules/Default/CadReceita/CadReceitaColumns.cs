
namespace WebMyMoney.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CadReceita")]
    [BasedOnRow(typeof(Entities.CadReceitaRow), CheckNames = true)]
    public class CadReceitaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CadReceitaId { get; set; }
        public String CadGrupoFamiliarCodigoAcesso { get; set; }
        public String CadContaTitulo { get; set; }
        public String CadUsuarioNome { get; set; }
        public String CodigoTabTipoReceitaDescricao { get; set; }
        [EditLink]
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