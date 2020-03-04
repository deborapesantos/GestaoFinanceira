
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TabTipoCartaoCredito]")]
    [DisplayName("Tab Tipo Cartao Credito"), InstanceName("Tab Tipo Cartao Credito")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class TabTipoCartaoCreditoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Tab Tipo Cartao Credito"), Identity]
        public Int32? CodigoTabTipoCartaoCredito
        {
            get { return Fields.CodigoTabTipoCartaoCredito[this]; }
            set { Fields.CodigoTabTipoCartaoCredito[this] = value; }
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
            get { return Fields.CodigoTabTipoCartaoCredito; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TabTipoCartaoCreditoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoTabTipoCartaoCredito;
            public StringField Descricao;
            public StringField Icone;
        }
    }
}
