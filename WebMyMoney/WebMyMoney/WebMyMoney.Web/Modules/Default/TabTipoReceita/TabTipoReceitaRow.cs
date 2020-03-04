
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TabTipoReceita]")]
    [DisplayName("Tab Tipo Receita"), InstanceName("Tab Tipo Receita")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class TabTipoReceitaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Tab Tipo Receita"), Identity]
        public Int32? CodigoTabTipoReceita
        {
            get { return Fields.CodigoTabTipoReceita[this]; }
            set { Fields.CodigoTabTipoReceita[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodigoTabTipoReceita; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TabTipoReceitaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoTabTipoReceita;
            public StringField Descricao;
        }
    }
}
