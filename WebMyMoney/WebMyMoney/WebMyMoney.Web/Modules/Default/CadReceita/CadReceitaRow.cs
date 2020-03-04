
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadReceita]")]
    [DisplayName("Cad Receita"), InstanceName("Cad Receita")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CadReceitaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cad Receita Id"), Identity]
        public Int32? CadReceitaId
        {
            get { return Fields.CadReceitaId[this]; }
            set { Fields.CadReceitaId[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar"), NotNull, ForeignKey("[dbo].[CadGrupoFamiliar]", "CadGrupoFamiliarId"), LeftJoin("jCadGrupoFamiliar"), TextualField("CadGrupoFamiliarCodigoAcesso")]
        [LookupEditor(typeof(CadGrupoFamiliarRow)), QuickFilter]
        public Int32? CadGrupoFamiliarId
        {
            get { return Fields.CadGrupoFamiliarId[this]; }
            set { Fields.CadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Cad Conta"), NotNull, ForeignKey("[dbo].[CadConta]", "CadContaId"), LeftJoin("jCadConta"), TextualField("CadContaTitulo")]
        [LookupEditor(typeof(CadContaRow)), QuickFilter]
        public Int32? CadContaId
        {
            get { return Fields.CadContaId[this]; }
            set { Fields.CadContaId[this] = value; }
        }

        [DisplayName("Cad Usuario"), NotNull, ForeignKey("[dbo].[CadUsuario]", "CadUsuarioId"), LeftJoin("jCadUsuario"), TextualField("CadUsuarioNome")]
        [LookupEditor(typeof(CadUsuarioRow)), QuickFilter]
        public Int32? CadUsuarioId
        {
            get { return Fields.CadUsuarioId[this]; }
            set { Fields.CadUsuarioId[this] = value; }
        }

        [DisplayName("Codigo Tab Tipo Receita"), NotNull, ForeignKey("[dbo].[TabTipoReceita]", "CodigoTabTipoReceita"), LeftJoin("jCodigoTabTipoReceita"), TextualField("CodigoTabTipoReceitaDescricao")]
        [LookupEditor(typeof(TabTipoReceitaRow)), QuickFilter]
        public Int32? CodigoTabTipoReceita
        {
            get { return Fields.CodigoTabTipoReceita[this]; }
            set { Fields.CodigoTabTipoReceita[this] = value; }
        }

        [DisplayName("Titulo"), Size(255), NotNull, QuickSearch]
        public String Titulo
        {
            get { return Fields.Titulo[this]; }
            set { Fields.Titulo[this] = value; }
        }

        [DisplayName("Descricao"), Size(255)]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        [DisplayName("Data Recebimento")]
        public DateTime? DataRecebimento
        {
            get { return Fields.DataRecebimento[this]; }
            set { Fields.DataRecebimento[this] = value; }
        }

        [DisplayName("Data Criacao"), NotNull]
        public DateTime? DataCriacao
        {
            get { return Fields.DataCriacao[this]; }
            set { Fields.DataCriacao[this] = value; }
        }

        [DisplayName("Is Fixo"), Column("isFixo"), NotNull]
        public Boolean? IsFixo
        {
            get { return Fields.IsFixo[this]; }
            set { Fields.IsFixo[this] = value; }
        }

        [DisplayName("Data Fixa Recebimento")]
        public Int32? DataFixaRecebimento
        {
            get { return Fields.DataFixaRecebimento[this]; }
            set { Fields.DataFixaRecebimento[this] = value; }
        }

        [DisplayName("Valor"), Size(18), NotNull]
        public Decimal? Valor
        {
            get { return Fields.Valor[this]; }
            set { Fields.Valor[this] = value; }
        }

        [DisplayName("Recebido"), NotNull]
        public Boolean? Recebido
        {
            get { return Fields.Recebido[this]; }
            set { Fields.Recebido[this] = value; }
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

        [DisplayName("Cad Conta Cad Grupo Familiar Id"), Expression("jCadConta.[CadGrupoFamiliarId]")]
        public Int32? CadContaCadGrupoFamiliarId
        {
            get { return Fields.CadContaCadGrupoFamiliarId[this]; }
            set { Fields.CadContaCadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Cad Conta Cad Usuario Id"), Expression("jCadConta.[CadUsuarioId]")]
        public Int32? CadContaCadUsuarioId
        {
            get { return Fields.CadContaCadUsuarioId[this]; }
            set { Fields.CadContaCadUsuarioId[this] = value; }
        }

        [DisplayName("Cad Conta Codigo Tab Tipo Conta"), Expression("jCadConta.[CodigoTabTipoConta]")]
        public Int32? CadContaCodigoTabTipoConta
        {
            get { return Fields.CadContaCodigoTabTipoConta[this]; }
            set { Fields.CadContaCodigoTabTipoConta[this] = value; }
        }

        [DisplayName("Cad Conta Valor Inicial"), Expression("jCadConta.[ValorInicial]")]
        public Decimal? CadContaValorInicial
        {
            get { return Fields.CadContaValorInicial[this]; }
            set { Fields.CadContaValorInicial[this] = value; }
        }

        [DisplayName("Cad Conta Saldo Atual"), Expression("jCadConta.[SaldoAtual]")]
        public Decimal? CadContaSaldoAtual
        {
            get { return Fields.CadContaSaldoAtual[this]; }
            set { Fields.CadContaSaldoAtual[this] = value; }
        }

        [DisplayName("Cad Conta Titulo"), Expression("jCadConta.[Titulo]")]
        public String CadContaTitulo
        {
            get { return Fields.CadContaTitulo[this]; }
            set { Fields.CadContaTitulo[this] = value; }
        }

        [DisplayName("Cad Conta Ativo"), Expression("jCadConta.[Ativo]")]
        public Boolean? CadContaAtivo
        {
            get { return Fields.CadContaAtivo[this]; }
            set { Fields.CadContaAtivo[this] = value; }
        }

        [DisplayName("Cad Conta Data Inicial"), Expression("jCadConta.[DataInicial]")]
        public DateTime? CadContaDataInicial
        {
            get { return Fields.CadContaDataInicial[this]; }
            set { Fields.CadContaDataInicial[this] = value; }
        }

        [DisplayName("Cad Usuario Cad Grupo Familiar Id"), Expression("jCadUsuario.[CadGrupoFamiliarId]")]
        public Int32? CadUsuarioCadGrupoFamiliarId
        {
            get { return Fields.CadUsuarioCadGrupoFamiliarId[this]; }
            set { Fields.CadUsuarioCadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Cad Usuario User Id"), Expression("jCadUsuario.[UserId]")]
        public Int32? CadUsuarioUserId
        {
            get { return Fields.CadUsuarioUserId[this]; }
            set { Fields.CadUsuarioUserId[this] = value; }
        }

        [DisplayName("Cad Usuario Nome"), Expression("jCadUsuario.[Nome]")]
        public String CadUsuarioNome
        {
            get { return Fields.CadUsuarioNome[this]; }
            set { Fields.CadUsuarioNome[this] = value; }
        }

        [DisplayName("Cad Usuario Telefone"), Expression("jCadUsuario.[Telefone]")]
        public String CadUsuarioTelefone
        {
            get { return Fields.CadUsuarioTelefone[this]; }
            set { Fields.CadUsuarioTelefone[this] = value; }
        }

        [DisplayName("Cad Usuario Data Criacao"), Expression("jCadUsuario.[DataCriacao]")]
        public DateTime? CadUsuarioDataCriacao
        {
            get { return Fields.CadUsuarioDataCriacao[this]; }
            set { Fields.CadUsuarioDataCriacao[this] = value; }
        }

        [DisplayName("Cad Usuario Email"), Expression("jCadUsuario.[Email]")]
        public String CadUsuarioEmail
        {
            get { return Fields.CadUsuarioEmail[this]; }
            set { Fields.CadUsuarioEmail[this] = value; }
        }

        [DisplayName("Cad Usuario Ativo"), Expression("jCadUsuario.[Ativo]")]
        public Boolean? CadUsuarioAtivo
        {
            get { return Fields.CadUsuarioAtivo[this]; }
            set { Fields.CadUsuarioAtivo[this] = value; }
        }

        [DisplayName("Codigo Tab Tipo Receita Descricao"), Expression("jCodigoTabTipoReceita.[Descricao]")]
        public String CodigoTabTipoReceitaDescricao
        {
            get { return Fields.CodigoTabTipoReceitaDescricao[this]; }
            set { Fields.CodigoTabTipoReceitaDescricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadReceitaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Titulo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CadReceitaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadReceitaId;
            public Int32Field CadGrupoFamiliarId;
            public Int32Field CadContaId;
            public Int32Field CadUsuarioId;
            public Int32Field CodigoTabTipoReceita;
            public StringField Titulo;
            public StringField Descricao;
            public DateTimeField DataRecebimento;
            public DateTimeField DataCriacao;
            public BooleanField IsFixo;
            public Int32Field DataFixaRecebimento;
            public DecimalField Valor;
            public BooleanField Recebido;
            public BooleanField Ativo;

            public Int32Field CadGrupoFamiliarCadAssinanteId;
            public BooleanField CadGrupoFamiliarAtivo;
            public DateTimeField CadGrupoFamiliarDataCriacao;
            public StringField CadGrupoFamiliarCodigoAcesso;
            public Int32Field CadGrupoFamiliarQdteUsuarios;

            public Int32Field CadContaCadGrupoFamiliarId;
            public Int32Field CadContaCadUsuarioId;
            public Int32Field CadContaCodigoTabTipoConta;
            public DecimalField CadContaValorInicial;
            public DecimalField CadContaSaldoAtual;
            public StringField CadContaTitulo;
            public BooleanField CadContaAtivo;
            public DateTimeField CadContaDataInicial;

            public Int32Field CadUsuarioCadGrupoFamiliarId;
            public Int32Field CadUsuarioUserId;
            public StringField CadUsuarioNome;
            public StringField CadUsuarioTelefone;
            public DateTimeField CadUsuarioDataCriacao;
            public StringField CadUsuarioEmail;
            public BooleanField CadUsuarioAtivo;

            public StringField CodigoTabTipoReceitaDescricao;
        }
    }
}
