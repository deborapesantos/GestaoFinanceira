
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[UserPermissions]")]
    [DisplayName("User Permissions"), InstanceName("User Permissions")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserPermissionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Permission Id"), Identity]
        public Int64? UserPermissionId
        {
            get { return Fields.UserPermissionId[this]; }
            set { Fields.UserPermissionId[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch]
        public String PermissionKey
        {
            get { return Fields.PermissionKey[this]; }
            set { Fields.PermissionKey[this] = value; }
        }

        [DisplayName("Granted"), NotNull]
        public Boolean? Granted
        {
            get { return Fields.Granted[this]; }
            set { Fields.Granted[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserPermissionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PermissionKey; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserPermissionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field UserPermissionId;
            public Int32Field UserId;
            public StringField PermissionKey;
            public BooleanField Granted;
        }
    }
}
