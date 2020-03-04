
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TabTipoConta]")]
    [DisplayName("Tab Tipo Conta"), InstanceName("Tab Tipo Conta")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class TabTipoContaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Tab Tipo Conta"), Identity]
        public Int32? CodigoTabTipoConta
        {
            get { return Fields.CodigoTabTipoConta[this]; }
            set { Fields.CodigoTabTipoConta[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodigoTabTipoConta; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TabTipoContaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoTabTipoConta;
            public StringField Descricao;
        }
    }
}
