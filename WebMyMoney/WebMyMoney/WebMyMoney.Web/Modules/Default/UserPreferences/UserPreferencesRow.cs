
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[UserPreferences]")]
    [DisplayName("User Preferences"), InstanceName("User Preferences")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserPreferencesRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Preference Id"), Identity]
        public Int32? UserPreferenceId
        {
            get { return Fields.UserPreferenceId[this]; }
            set { Fields.UserPreferenceId[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        public Int64? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Preference Type"), Size(100), NotNull, QuickSearch]
        public String PreferenceType
        {
            get { return Fields.PreferenceType[this]; }
            set { Fields.PreferenceType[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Value")]
        public String Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserPreferenceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PreferenceType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPreferencesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserPreferenceId;
            public Int64Field UserId;
            public StringField PreferenceType;
            public StringField Name;
            public StringField Value;
        }
    }
}
