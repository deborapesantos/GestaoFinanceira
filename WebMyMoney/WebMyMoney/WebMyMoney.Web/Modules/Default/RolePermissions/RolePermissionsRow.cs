
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RolePermissions]")]
    [DisplayName("Role Permissions"), InstanceName("Role Permissions")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RolePermissionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Role Permission Id"), Identity]
        public Int64? RolePermissionId
        {
            get { return Fields.RolePermissionId[this]; }
            set { Fields.RolePermissionId[this] = value; }
        }

        [DisplayName("Role Id"), NotNull]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        [DisplayName("Permission Key"), Size(100), NotNull, QuickSearch]
        public String PermissionKey
        {
            get { return Fields.PermissionKey[this]; }
            set { Fields.PermissionKey[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RolePermissionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PermissionKey; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RolePermissionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field RolePermissionId;
            public Int32Field RoleId;
            public StringField PermissionKey;
        }
    }
}
