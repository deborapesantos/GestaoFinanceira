
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TabTipoObjetivo]")]
    [DisplayName("Tab Tipo Objetivo"), InstanceName("Tab Tipo Objetivo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript(Permission = "*")]
    public sealed class TabTipoObjetivoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Codigo Tab Tipo Objetivo"), Identity]
        public Int32? CodigoTabTipoObjetivo
        {
            get { return Fields.CodigoTabTipoObjetivo[this]; }
            set { Fields.CodigoTabTipoObjetivo[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodigoTabTipoObjetivo; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TabTipoObjetivoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodigoTabTipoObjetivo;
            public StringField Descricao;
        }
    }
}
