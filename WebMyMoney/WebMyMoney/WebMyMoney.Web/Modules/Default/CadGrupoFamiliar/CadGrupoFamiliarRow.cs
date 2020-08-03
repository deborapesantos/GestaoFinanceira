
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadGrupoFamiliar]")]
    [DisplayName("Cad Grupo Familiar"), InstanceName("Cad Grupo Familiar")]
    [ReadPermission("Usuario:Visualizar")]
    [ModifyPermission("Usuario:Editar")]
    [LookupScript(Permission = "*")]
    public sealed class CadGrupoFamiliarRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cad Grupo Familiar Id"), Identity]
        public Int32? CadGrupoFamiliarId
        {
            get { return Fields.CadGrupoFamiliarId[this]; }
            set { Fields.CadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Cad Assinante"), NotNull, ForeignKey("[dbo].[CadAssinante]", "CadAssinanteId"), LeftJoin("jCadAssinante"), TextualField("CadAssinanteUsarioAdminNome")]
        public Int32? CadAssinanteId
        {
            get { return Fields.CadAssinanteId[this]; }
            set { Fields.CadAssinanteId[this] = value; }
        }

        [DisplayName("Ativo")]
        public Boolean? Ativo
        {
            get { return Fields.Ativo[this]; }
            set { Fields.Ativo[this] = value; }
        }

        [DisplayName("IsGrupoPessoal")]
        public Boolean? IsGrupoPessoal
        {
            get { return Fields.IsGrupoPessoal[this]; }
            set { Fields.IsGrupoPessoal[this] = value; }
        }

        [DisplayName("Data Criacao")]
        public DateTime? DataCriacao
        {
            get { return Fields.DataCriacao[this]; }
            set { Fields.DataCriacao[this] = value; }
        }

        [DisplayName("Codigo Acesso"), Size(255), QuickSearch]
        public String CodigoAcesso
        {
            get { return Fields.CodigoAcesso[this]; }
            set { Fields.CodigoAcesso[this] = value; }
        }

        [DisplayName("Titulo"), Size(255), QuickSearch]
        public String Titulo
        {
            get { return Fields.Titulo[this]; }
            set { Fields.Titulo[this] = value; }
        }

        [DisplayName("Qdte Usuarios")]
        public Int32? QdteUsuarios
        {
            get { return Fields.QdteUsuarios[this]; }
            set { Fields.QdteUsuarios[this] = value; }
        }

        [DisplayName("Cad Assinante Data Criacao"), Expression("jCadAssinante.[DataCriacao]")]
        public DateTime? CadAssinanteDataCriacao
        {
            get { return Fields.CadAssinanteDataCriacao[this]; }
            set { Fields.CadAssinanteDataCriacao[this] = value; }
        }

        [DisplayName("Cad Assinante Usuario Admin Id"), Expression("jCadAssinante.[UsuarioAdminId]")]
        public Int32? CadAssinanteUsuarioAdminId
        {
            get { return Fields.CadAssinanteUsuarioAdminId[this]; }
            set { Fields.CadAssinanteUsuarioAdminId[this] = value; }
        }

        [DisplayName("Cad Assinante Usario Admin Nome"), Expression("jCadAssinante.[UsarioAdminNome]")]
        public String CadAssinanteUsarioAdminNome
        {
            get { return Fields.CadAssinanteUsarioAdminNome[this]; }
            set { Fields.CadAssinanteUsarioAdminNome[this] = value; }
        }

        [DisplayName("Cad Assinante Usuario Admin Email"), Expression("jCadAssinante.[UsuarioAdminEmail]")]
        public String CadAssinanteUsuarioAdminEmail
        {
            get { return Fields.CadAssinanteUsuarioAdminEmail[this]; }
            set { Fields.CadAssinanteUsuarioAdminEmail[this] = value; }
        }

        [DisplayName("Cad Assinante Qdte Grupo Familiar"), Expression("jCadAssinante.[QdteGrupoFamiliar]")]
        public Int32? CadAssinanteQdteGrupoFamiliar
        {
            get { return Fields.CadAssinanteQdteGrupoFamiliar[this]; }
            set { Fields.CadAssinanteQdteGrupoFamiliar[this] = value; }
        }

        [DisplayName("Cad Assinante Ativo"), Expression("jCadAssinante.[Ativo]")]
        public Boolean? CadAssinanteAtivo
        {
            get { return Fields.CadAssinanteAtivo[this]; }
            set { Fields.CadAssinanteAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadGrupoFamiliarId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CadAssinanteUsarioAdminNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CadGrupoFamiliarRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadGrupoFamiliarId;
            public Int32Field CadAssinanteId;
            public BooleanField Ativo;
            public BooleanField IsGrupoPessoal;
            public DateTimeField DataCriacao;
            public StringField CodigoAcesso;
            public Int32Field QdteUsuarios;
            public StringField Titulo;

            public DateTimeField CadAssinanteDataCriacao;
            public Int32Field CadAssinanteUsuarioAdminId;
            public StringField CadAssinanteUsarioAdminNome;
            public StringField CadAssinanteUsuarioAdminEmail;
            public Int32Field CadAssinanteQdteGrupoFamiliar;
            public BooleanField CadAssinanteAtivo;
        }
    }
}
