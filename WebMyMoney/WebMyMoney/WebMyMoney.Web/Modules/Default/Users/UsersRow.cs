
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Users]")]
    [DisplayName("Users"), InstanceName("Users")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UsersRow : Row, IIdRow, INameRow
    {
        [DisplayName("User Id"), Identity]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Display Name"), Size(100), NotNull]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Source"), Size(4), NotNull]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Password Hash"), Size(86), NotNull]
        public String PasswordHash
        {
            get { return Fields.PasswordHash[this]; }
            set { Fields.PasswordHash[this] = value; }
        }

        [DisplayName("Password Salt"), Size(10), NotNull]
        public String PasswordSalt
        {
            get { return Fields.PasswordSalt[this]; }
            set { Fields.PasswordSalt[this] = value; }
        }

        [DisplayName("Last Directory Update")]
        public DateTime? LastDirectoryUpdate
        {
            get { return Fields.LastDirectoryUpdate[this]; }
            set { Fields.LastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User Image"), Size(100)]
        public String UserImage
        {
            get { return Fields.UserImage[this]; }
            set { Fields.UserImage[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id")]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Usuario Id")]
        public Int32? UsuarioId
        {
            get { return Fields.UsuarioId[this]; }
            set { Fields.UsuarioId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Username; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UsersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField DisplayName;
            public StringField Email;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public DateTimeField LastDirectoryUpdate;
            public StringField UserImage;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int16Field IsActive;
            public Int32Field UsuarioId;
        }
    }
}
