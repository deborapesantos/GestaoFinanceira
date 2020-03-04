
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadCartaoCredito]")]
    [DisplayName("Cad Cartao Credito"), InstanceName("Cad Cartao Credito")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CadCartaoCreditoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cad Cartao Credito Id"), Identity]
        public Int32? CadCartaoCreditoId
        {
            get { return Fields.CadCartaoCreditoId[this]; }
            set { Fields.CadCartaoCreditoId[this] = value; }
        }

        [DisplayName("Cad Conta"), NotNull, ForeignKey("[dbo].[CadConta]", "CadContaId"), LeftJoin("jCadConta"), TextualField("CadContaTitulo")]
        public Int32? CadContaId
        {
            get { return Fields.CadContaId[this]; }
            set { Fields.CadContaId[this] = value; }
        }

        [DisplayName("Cad Grupo Familiar"), NotNull, ForeignKey("[dbo].[CadGrupoFamiliar]", "CadGrupoFamiliarId"), LeftJoin("jCadGrupoFamiliar"), TextualField("CadGrupoFamiliarCodigoAcesso")]
        public Int32? CadGrupoFamiliarId
        {
            get { return Fields.CadGrupoFamiliarId[this]; }
            set { Fields.CadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Cad Usuario"), NotNull, ForeignKey("[dbo].[CadUsuario]", "CadUsuarioId"), LeftJoin("jCadUsuario"), TextualField("CadUsuarioNome")]
        public Int32? CadUsuarioId
        {
            get { return Fields.CadUsuarioId[this]; }
            set { Fields.CadUsuarioId[this] = value; }
        }

        [DisplayName("Codigo Tab Tipo Cartao Credito"), NotNull, ForeignKey("[dbo].[TabTipoCartaoCredito]", "CodigoTabTipoCartaoCredito"), LeftJoin("jCodigoTabTipoCartaoCredito"), TextualField("CodigoTabTipoCartaoCreditoDescricao")]
        public Int32? CodigoTabTipoCartaoCredito
        {
            get { return Fields.CodigoTabTipoCartaoCredito[this]; }
            set { Fields.CodigoTabTipoCartaoCredito[this] = value; }
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

        [DisplayName("Data Pagamento Fatura"), NotNull]
        public DateTime? DataPagamentoFatura
        {
            get { return Fields.DataPagamentoFatura[this]; }
            set { Fields.DataPagamentoFatura[this] = value; }
        }

        [DisplayName("Dia Pagar Fatura"), NotNull]
        public Int32? DiaPagarFatura
        {
            get { return Fields.DiaPagarFatura[this]; }
            set { Fields.DiaPagarFatura[this] = value; }
        }

        [DisplayName("Data Fechamento Fatura"), NotNull]
        public DateTime? DataFechamentoFatura
        {
            get { return Fields.DataFechamentoFatura[this]; }
            set { Fields.DataFechamentoFatura[this] = value; }
        }

        [DisplayName("Dia Fechar Fatura"), NotNull]
        public Int32? DiaFecharFatura
        {
            get { return Fields.DiaFecharFatura[this]; }
            set { Fields.DiaFecharFatura[this] = value; }
        }

        [DisplayName("Valor Limite Total"), Size(18), NotNull]
        public Decimal? ValorLimiteTotal
        {
            get { return Fields.ValorLimiteTotal[this]; }
            set { Fields.ValorLimiteTotal[this] = value; }
        }

        [DisplayName("Valor Limite Atual"), Size(18), NotNull]
        public Decimal? ValorLimiteAtual
        {
            get { return Fields.ValorLimiteAtual[this]; }
            set { Fields.ValorLimiteAtual[this] = value; }
        }

        [DisplayName("Valor Parcial Fatura Atual"), Size(18)]
        public Decimal? ValorParcialFaturaAtual
        {
            get { return Fields.ValorParcialFaturaAtual[this]; }
            set { Fields.ValorParcialFaturaAtual[this] = value; }
        }

        [DisplayName("Saldo"), Size(18)]
        public Decimal? Saldo
        {
            get { return Fields.Saldo[this]; }
            set { Fields.Saldo[this] = value; }
        }

        [DisplayName("Ativo")]
        public Boolean? Ativo
        {
            get { return Fields.Ativo[this]; }
            set { Fields.Ativo[this] = value; }
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

        [DisplayName("Codigo Tab Tipo Cartao Credito Descricao"), Expression("jCodigoTabTipoCartaoCredito.[Descricao]")]
        public String CodigoTabTipoCartaoCreditoDescricao
        {
            get { return Fields.CodigoTabTipoCartaoCreditoDescricao[this]; }
            set { Fields.CodigoTabTipoCartaoCreditoDescricao[this] = value; }
        }

        [DisplayName("Codigo Tab Tipo Cartao Credito Icone"), Expression("jCodigoTabTipoCartaoCredito.[Icone]")]
        public String CodigoTabTipoCartaoCreditoIcone
        {
            get { return Fields.CodigoTabTipoCartaoCreditoIcone[this]; }
            set { Fields.CodigoTabTipoCartaoCreditoIcone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadCartaoCreditoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Titulo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CadCartaoCreditoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadCartaoCreditoId;
            public Int32Field CadContaId;
            public Int32Field CadGrupoFamiliarId;
            public Int32Field CadUsuarioId;
            public Int32Field CodigoTabTipoCartaoCredito;
            public StringField Titulo;
            public StringField Descricao;
            public DateTimeField DataPagamentoFatura;
            public Int32Field DiaPagarFatura;
            public DateTimeField DataFechamentoFatura;
            public Int32Field DiaFecharFatura;
            public DecimalField ValorLimiteTotal;
            public DecimalField ValorLimiteAtual;
            public DecimalField ValorParcialFaturaAtual;
            public DecimalField Saldo;
            public BooleanField Ativo;

            public Int32Field CadContaCadGrupoFamiliarId;
            public Int32Field CadContaCadUsuarioId;
            public Int32Field CadContaCodigoTabTipoConta;
            public DecimalField CadContaValorInicial;
            public DecimalField CadContaSaldoAtual;
            public StringField CadContaTitulo;
            public BooleanField CadContaAtivo;
            public DateTimeField CadContaDataInicial;

            public Int32Field CadGrupoFamiliarCadAssinanteId;
            public BooleanField CadGrupoFamiliarAtivo;
            public DateTimeField CadGrupoFamiliarDataCriacao;
            public StringField CadGrupoFamiliarCodigoAcesso;
            public Int32Field CadGrupoFamiliarQdteUsuarios;

            public Int32Field CadUsuarioCadGrupoFamiliarId;
            public Int32Field CadUsuarioUserId;
            public StringField CadUsuarioNome;
            public StringField CadUsuarioTelefone;
            public DateTimeField CadUsuarioDataCriacao;
            public StringField CadUsuarioEmail;
            public BooleanField CadUsuarioAtivo;

            public StringField CodigoTabTipoCartaoCreditoDescricao;
            public StringField CodigoTabTipoCartaoCreditoIcone;
        }
    }
}
