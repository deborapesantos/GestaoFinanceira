
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TabTipoDespesa]")]
    [DisplayName("Tab Tipo Despesa"), InstanceName("Tab Tipo Despesa")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class TabTipoDespesaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Tab Tipo Despesa"), Identity]
        public Int32? CodigoTabTipoDespesa
        {
            get { return Fields.CodigoTabTipoDespesa[this]; }
            set { Fields.CodigoTabTipoDespesa[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        [DisplayName("Icone"), Size(255)]
        public String Icone
        {
            get { return Fields.Icone[this]; }
            set { Fields.Icone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodigoTabTipoDespesa; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TabTipoDespesaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoTabTipoDespesa;
            public StringField Descricao;
            public StringField Icone;
        }
    }
}
