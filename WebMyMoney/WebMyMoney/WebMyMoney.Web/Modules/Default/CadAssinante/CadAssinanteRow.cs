
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadAssinante]")]
    [DisplayName("Cad Assinante"), InstanceName("Cad Assinante")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CadAssinanteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cad Assinante Id"), Identity]
        public Int32? CadAssinanteId
        {
            get { return Fields.CadAssinanteId[this]; }
            set { Fields.CadAssinanteId[this] = value; }
        }

        [DisplayName("Data Criacao")]
        public DateTime? DataCriacao
        {
            get { return Fields.DataCriacao[this]; }
            set { Fields.DataCriacao[this] = value; }
        }

        [DisplayName("Usuario Admin Id")]
        public Int32? UsuarioAdminId
        {
            get { return Fields.UsuarioAdminId[this]; }
            set { Fields.UsuarioAdminId[this] = value; }
        }

        [DisplayName("Usario Admin Nome"), Size(255), QuickSearch]
        public String UsarioAdminNome
        {
            get { return Fields.UsarioAdminNome[this]; }
            set { Fields.UsarioAdminNome[this] = value; }
        }

        [DisplayName("Username"), Size(255), NotMapped]
        public String Username
        {
            get { return Fields.Username[this]; }
            set { Fields.Username[this] = value; }
        }

        [DisplayName("Usuario Admin Email"), Size(255)]
        public String UsuarioAdminEmail
        {
            get { return Fields.UsuarioAdminEmail[this]; }
            set { Fields.UsuarioAdminEmail[this] = value; }
        }

        [DisplayName("Senha"), Size(13), NotNull, NotMapped]
        public String Senha
        {
            get { return Fields.Senha[this]; }
            set { Fields.Senha[this] = value; }
        }

        [DisplayName("Qdte Grupo Familiar")]
        public Int32? QdteGrupoFamiliar
        {
            get { return Fields.QdteGrupoFamiliar[this]; }
            set { Fields.QdteGrupoFamiliar[this] = value; }
        }

        [DisplayName("Ativo")]
        public Boolean? Ativo
        {
            get { return Fields.Ativo[this]; }
            set { Fields.Ativo[this] = value; }
        }

        [DisplayName("Telefone"), Size(13), NotNull,NotMapped]
        public String Telefone
        {
            get { return Fields.Telefone[this]; }
            set { Fields.Telefone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadAssinanteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UsarioAdminNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CadAssinanteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadAssinanteId;
            public DateTimeField DataCriacao;
            public Int32Field UsuarioAdminId;
            public StringField UsarioAdminNome;
            public StringField UsuarioAdminEmail;
            public Int32Field QdteGrupoFamiliar;
            public BooleanField Ativo;
            public StringField Telefone;
            public StringField Username;
            public StringField Senha;
        }
    }
}
