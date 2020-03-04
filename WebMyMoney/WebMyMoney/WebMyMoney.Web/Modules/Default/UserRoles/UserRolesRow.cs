
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[UserRoles]")]
    [DisplayName("User Roles"), InstanceName("User Roles")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UserRolesRow : Row, IIdRow
    {
        [DisplayName("User Role Id"), Identity]
        public Int64? UserRoleId
        {
            get { return Fields.UserRoleId[this]; }
            set { Fields.UserRoleId[this] = value; }
        }

        [DisplayName("User Id"), NotNull]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Role Id"), NotNull]
        public Int32? RoleId
        {
            get { return Fields.RoleId[this]; }
            set { Fields.RoleId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserRoleId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UserRolesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field UserRoleId;
            public Int32Field UserId;
            public Int32Field RoleId;
        }
    }
}
