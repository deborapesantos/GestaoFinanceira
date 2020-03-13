
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadDespesa]")]
    [DisplayName("Cad Despesa"), InstanceName("Cad Despesa")]
    [ReadPermission("Usuario:Visualizar")]
    [ModifyPermission("Usuario:Editar")]
    public sealed class CadDespesaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Despesa Id"), Identity]
        public Int32? CadDespesaId
        {
            get { return Fields.CadDespesaId[this]; }
            set { Fields.CadDespesaId[this] = value; }
        }

        [DisplayName("Conta"), NotNull, ForeignKey("[dbo].[CadConta]", "CadContaId"), LeftJoin("jCadConta"), TextualField("CadContaTitulo")]
        [LookupEditor(typeof(CadContaRow)), QuickFilter]
        public Int32? CadContaId
        {
            get { return Fields.CadContaId[this]; }
            set { Fields.CadContaId[this] = value; }
        }

        [DisplayName("Grupo Familiar"), NotNull, ForeignKey("[dbo].[CadGrupoFamiliar]", "CadGrupoFamiliarId"), LeftJoin("jCadGrupoFamiliar"), TextualField("CadGrupoFamiliarCodigoAcesso")]
        [LookupEditor(typeof(CadGrupoFamiliarRow)), QuickFilter]
        public Int32? CadGrupoFamiliarId
        {
            get { return Fields.CadGrupoFamiliarId[this]; }
            set { Fields.CadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Usuário"), NotNull, ForeignKey("[dbo].[CadUsuario]", "CadUsuarioId"), LeftJoin("jCadUsuario"), TextualField("CadUsuarioNome")]
        [LookupEditor(typeof(CadUsuarioRow)), QuickFilter]
        public Int32? CadUsuarioId
        {
            get { return Fields.CadUsuarioId[this]; }
            set { Fields.CadUsuarioId[this] = value; }
        }

        [DisplayName("Fatura"), ForeignKey("[dbo].[CadFaturaCartaoCredito]", "CadFaturaCartaoCreditoId"), LeftJoin("jCadFaturaCartaoCredito"), TextualField("MesFaturaVigente")]
        [LookupEditor(typeof(CadFaturaCartaoCreditoRow)), QuickFilter]
        public Int32? CadFaturaCartaoCreditoId
        {
            get { return Fields.CadFaturaCartaoCreditoId[this]; }
            set { Fields.CadFaturaCartaoCreditoId[this] = value; }
        }

        [DisplayName("Tipo de Despesa"), NotNull, ForeignKey("[dbo].[TabTipoDespesa]", "CodigoTabTipoDespesa"), LeftJoin("jCodigoTabTipoDespesa"), TextualField("CodigoTabTipoDespesaDescricao")]
        [LookupEditor(typeof(TabTipoDespesaRow)), QuickFilter]
        public Int32? CodigoTabTipoDespesa
        {
            get { return Fields.CodigoTabTipoDespesa[this]; }
            set { Fields.CodigoTabTipoDespesa[this] = value; }
        }

        [DisplayName("Quem recebe"),  ForeignKey("[dbo].[CadParticipante]", "CadParticipanteId"), LeftJoin("jCadParticipante"), TextualField("NomeRazaoSocial")]
        [LookupEditor(typeof(CadParticipanteRow)), QuickFilter]
        public Int32? CadParticipanteId
        {
            get { return Fields.CadParticipanteId[this]; }
            set { Fields.CadParticipanteId[this] = value; }
        }

        [DisplayName("Nome"), Size(255), NotNull, QuickSearch]
        public String Titulo
        {
            get { return Fields.Titulo[this]; }
            set { Fields.Titulo[this] = value; }
        }

        [DisplayName("Data de Pagamento")]
        public DateTime? DataPagamento
        {
            get { return Fields.DataPagamento[this]; }
            set { Fields.DataPagamento[this] = value; }
        }

        [DisplayName("Data de Criacao"), NotNull]
        public DateTime? DataCriacao
        {
            get { return Fields.DataCriacao[this]; }
            set { Fields.DataCriacao[this] = value; }
        }

        [DisplayName("Despesa Fixa?"), Column("isFixo")]
        public Boolean? IsFixo
        {
            get { return Fields.IsFixo[this]; }
            set { Fields.IsFixo[this] = value; }
        }

        [DisplayName("Parcelado? "), Column("IsParcelado")]
        public Boolean? IsParcelado
        {
            get { return Fields.IsParcelado[this]; }
            set { Fields.IsParcelado[this] = value; }
        }

        [DisplayName("Numero da Parcela"), Column("NumParcela")]
        public Int32? NumParcela
        {
            get { return Fields.NumParcela[this]; }
            set { Fields.NumParcela[this] = value; }
        }

        [DisplayName("Qdte Parcelas"), NotMapped]
        public Int32? QdteParcelas
        {
            get { return Fields.QdteParcelas[this]; }
            set { Fields.QdteParcelas[this] = value; }
        }

        [DisplayName("Data Vencimento"), NotNull]
        public DateTime? DataVencimento
        {
            get { return Fields.DataVencimento[this]; }
            set { Fields.DataVencimento[this] = value; }
        }

        [DisplayName("Valor Total"), NotNull, DisplayFormat("#,##0.00"), Size(18), Scale(2), AlignRight]
        public Decimal? ValorTotal
        {
            get { return Fields.ValorTotal[this]; }
            set { Fields.ValorTotal[this] = value; }
        }

        [DisplayName("Multas Juros"), DisplayFormat("#,##0.00"), Size(18), Scale(2), AlignRight]
        public Decimal? MultasJuros
        {
            get { return Fields.MultasJuros[this]; }
            set { Fields.MultasJuros[this] = value; }
        }

        [DisplayName("Data Fixa de Vencimento")]
        public Int32? DataFixaVencimento
        {
            get { return Fields.DataFixaVencimento[this]; }
            set { Fields.DataFixaVencimento[this] = value; }
        }

        [DisplayName("Pago"), NotNull]
        public Boolean? Pago
        {
            get { return Fields.Pago[this]; }
            set { Fields.Pago[this] = value; }
        }

        [DisplayName("Ativo")]
        public Boolean? Ativo
        {
            get { return Fields.Ativo[this]; }
            set { Fields.Ativo[this] = value; }
        }
        [DisplayName("Imposto"), DisplayFormat("#,##0.00"), Size(18), Scale(2), AlignRight]
        public Decimal? Imposto
        {
            get { return Fields.Imposto[this]; }
            set { Fields.Imposto[this] = value; }
        }

        [DisplayName("Descontos"), DisplayFormat("#,##0.00"), Size(18), Scale(2), AlignRight]
        public Decimal? Descontos
        {
            get { return Fields.Descontos[this]; }
            set { Fields.Descontos[this] = value; }
        }

        //----------------------------------------------------------------
        

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

        [DisplayName("Codigo Tab Tipo Despesa Descricao"), Expression("jCodigoTabTipoDespesa.[Descricao]")]
        public String CodigoTabTipoDespesaDescricao
        {
            get { return Fields.CodigoTabTipoDespesaDescricao[this]; }
            set { Fields.CodigoTabTipoDespesaDescricao[this] = value; }
        }

        [DisplayName("Codigo Tab Tipo Despesa Icone"), Expression("jCodigoTabTipoDespesa.[Icone]")]
        public String CodigoTabTipoDespesaIcone
        {
            get { return Fields.CodigoTabTipoDespesaIcone[this]; }
            set { Fields.CodigoTabTipoDespesaIcone[this] = value; }
        }


        [DisplayName("Nome Participante"), Expression("jCadParticipante.[NomeRazaoSocial]")]
        public String NomeParticipante
        {
            get { return Fields.NomeParticipante[this]; }
            set { Fields.NomeParticipante[this] = value; }
        }

        [DisplayName("CPF/CNPJ Participante"), Expression("jCadParticipante.[CpfCnpj]")]
        public String CpfCnpjParticipante
        {
            get { return Fields.CpfCnpjParticipante[this]; }
            set { Fields.CpfCnpjParticipante[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadDespesaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Titulo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CadDespesaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadDespesaId;
            public Int32Field CadContaId;
            public Int32Field CadGrupoFamiliarId;
            public Int32Field CadUsuarioId;
            public Int32Field CadFaturaCartaoCreditoId;
            public Int32Field CadParticipanteId;
            public Int32Field CodigoTabTipoDespesa;
            public StringField Titulo;
            public DateTimeField DataPagamento;
            public DateTimeField DataCriacao;
            public BooleanField IsFixo;
            public BooleanField IsParcelado;
            public DateTimeField DataVencimento;
            public DecimalField ValorTotal;
            public DecimalField MultasJuros;
            public Int32Field DataFixaVencimento;
            public BooleanField Pago;
            public BooleanField Ativo;
            public DecimalField Imposto;
            public DecimalField Descontos;
            public Int32Field NumParcela;
            public Int32Field QdteParcelas;

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

            public StringField CodigoTabTipoDespesaDescricao;
            public StringField CodigoTabTipoDespesaIcone;


            public StringField NomeParticipante;
            public StringField CpfCnpjParticipante;
        }
    }
}
