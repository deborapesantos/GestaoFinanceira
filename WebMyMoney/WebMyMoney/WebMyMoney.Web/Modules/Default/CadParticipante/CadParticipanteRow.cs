
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadParticipante]")]
    [DisplayName("Cad Participante"), InstanceName("Cad Participante")]
    [ReadPermission("Usuario:Visualizar")]
    [ModifyPermission("Usuario:Editar")]
    [LookupScript(Permission = "*")]
    public sealed class CadParticipanteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cad Participante Id"), Identity]
        public Int32? CadParticipanteId
        {
            get { return Fields.CadParticipanteId[this]; }
            set { Fields.CadParticipanteId[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar"), NotNull, ForeignKey("[dbo].[CadGrupoFamiliar]", "CadGrupoFamiliarId"), LeftJoin("jCadGrupoFamiliar"), TextualField("CadGrupoFamiliarCodigoAcesso")]
        public Int32? CadGrupoFamiliarId
        {
            get { return Fields.CadGrupoFamiliarId[this]; }
            set { Fields.CadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Nome Razao Social"), Size(255), NotNull, QuickSearch]
        public String NomeRazaoSocial
        {
            get { return Fields.NomeRazaoSocial[this]; }
            set { Fields.NomeRazaoSocial[this] = value; }
        }

        [DisplayName("Cpf Cnpj"), Size(15)]
        public String CpfCnpj
        {
            get { return Fields.CpfCnpj[this]; }
            set { Fields.CpfCnpj[this] = value; }
        }

        [DisplayName("Ativo")]
        public Boolean? Ativo
        {
            get { return Fields.Ativo[this]; }
            set { Fields.Ativo[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar Cad Assinante Id"), Expression("jCadGrupoFamiliar.[CadAssinanteId]")]
        public Int32? CadGrupoFamiliarCadAssinanteId
        {
            get { return Fields.CadGrupoFamiliarCadAssinanteId[this]; }
            set { Fields.CadGrupoFamiliarCadAssinanteId[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar Ativo"), Expression("jCadGrupoFamiliar.[Ativo]")]
        public Boolean? CadGrupoFamiliarAtivo
        {
            get { return Fields.CadGrupoFamiliarAtivo[this]; }
            set { Fields.CadGrupoFamiliarAtivo[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar Data Criacao"), Expression("jCadGrupoFamiliar.[DataCriacao]")]
        public DateTime? CadGrupoFamiliarDataCriacao
        {
            get { return Fields.CadGrupoFamiliarDataCriacao[this]; }
            set { Fields.CadGrupoFamiliarDataCriacao[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar Codigo Acesso"), Expression("jCadGrupoFamiliar.[CodigoAcesso]")]
        public String CadGrupoFamiliarCodigoAcesso
        {
            get { return Fields.CadGrupoFamiliarCodigoAcesso[this]; }
            set { Fields.CadGrupoFamiliarCodigoAcesso[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar Qdte Usuarios"), Expression("jCadGrupoFamiliar.[QdteUsuarios]")]
        public Int32? CadGrupoFamiliarQdteUsuarios
        {
            get { return Fields.CadGrupoFamiliarQdteUsuarios[this]; }
            set { Fields.CadGrupoFamiliarQdteUsuarios[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadParticipanteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NomeRazaoSocial; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CadParticipanteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadParticipanteId;
            public Int32Field CadGrupoFamiliarId;
            public StringField NomeRazaoSocial;
            public StringField CpfCnpj;
            public BooleanField Ativo;

            public Int32Field CadGrupoFamiliarCadAssinanteId;
            public BooleanField CadGrupoFamiliarAtivo;
            public DateTimeField CadGrupoFamiliarDataCriacao;
            public StringField CadGrupoFamiliarCodigoAcesso;
            public Int32Field CadGrupoFamiliarQdteUsuarios;
        }
    }
}
