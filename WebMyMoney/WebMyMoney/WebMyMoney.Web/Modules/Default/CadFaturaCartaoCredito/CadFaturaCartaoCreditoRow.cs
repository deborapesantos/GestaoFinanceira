
namespace WebMyMoney.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using WebMyMoney.Modules.Common;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[CadFaturaCartaoCredito]")]
    [DisplayName("Cad Fatura Cartao Credito"), InstanceName("Cad Fatura Cartao Credito")]
    [ReadPermission("Usuario:Visualizar")]
    [ModifyPermission("Usuario:Editar")]
    [LookupScript(Permission = "*")]
    public sealed class CadFaturaCartaoCreditoRow : Row, IIdRow,  INameRow
    {
        [DisplayName("Cad Fatura Cartao Credito Id"), Identity]
        public Int32? CadFaturaCartaoCreditoId
        {
            get { return Fields.CadFaturaCartaoCreditoId[this]; }
            set { Fields.CadFaturaCartaoCreditoId[this] = value; }
        }

        [DisplayName("Cad Cartao Credito"), NotNull, ForeignKey("[dbo].[CadCartaoCredito]", "CadCartaoCreditoId"), LeftJoin("jCadCartaoCredito"), TextualField("CadCartaoCreditoTitulo")]
        [LookupEditor(typeof(CadCartaoCreditoRow)), QuickFilter]
        public Int32? CadCartaoCreditoId
        {
            get { return Fields.CadCartaoCreditoId[this]; }
            set { Fields.CadCartaoCreditoId[this] = value; }
        }

        [DisplayName("Mes Fatura Vigente"), NotNull]
        public Int32? MesFaturaVigente
        {
            get { return Fields.MesFaturaVigente[this]; }
            set { Fields.MesFaturaVigente[this] = value; }
        }

        [DisplayName("Mes Vigente")]
        [Expression("CONCAT('mês ',T0.[MesFaturaVigente])")]
        
        public string MesVigente
        {
            get { return Fields.MesVigente[this]; }
            set { Fields.MesVigente[this] = value; }
        }

        [DisplayName("Dia Vencimento Fatura")]
        public DateTime? DiaVencimentoFatura
        {
            get { return Fields.DiaVencimentoFatura[this]; }
            set { Fields.DiaVencimentoFatura[this] = value; }
        }

        [DisplayName("Data Pagamento Fatura")]
        public DateTime? DataPagamentoFatura
        {
            get { return Fields.DataPagamentoFatura[this]; }
            set { Fields.DataPagamentoFatura[this] = value; }
        }

        [DisplayName("Data Fechamento Fatura")]
        public DateTime? DataFechamentoFatura
        {
            get { return Fields.DataFechamentoFatura[this]; }
            set { Fields.DataFechamentoFatura[this] = value; }
        }

        [DisplayName("Dia Fechar Fatura")]
        public Int32? DiaFecharFatura
        {
            get { return Fields.DiaFecharFatura[this]; }
            set { Fields.DiaFecharFatura[this] = value; }
        }

        [DisplayName("Valor Parcial Fatura Atual"), DisplayFormat("#,##0.00"), Size(18), Scale(2), AlignRight]
        public Decimal? ValorParcialFaturaAtual
        {
            get { return Fields.ValorParcialFaturaAtual[this]; }
            set { Fields.ValorParcialFaturaAtual[this] = value; }
        }

        [DisplayName("Is Parcelar Fatura")]
        public Boolean? IsParcelarFatura
        {
            get { return Fields.IsParcelarFatura[this]; }
            set { Fields.IsParcelarFatura[this] = value; }
        }

        [DisplayName("Num Parcelas Fatura")]
        public Int32? NumParcelasFatura
        {
            get { return Fields.NumParcelasFatura[this]; }
            set { Fields.NumParcelasFatura[this] = value; }
        }

        [DisplayName("Saldo Anterior"), DisplayFormat("#,##0.00"), Size(18), Scale(2), AlignRight]
        public Decimal? SaldoAnterior
        {
            get { return Fields.SaldoAnterior[this]; }
            set { Fields.SaldoAnterior[this] = value; }
        }

        [DisplayName("Ativo")]
        public Boolean? Ativo
        {
            get { return Fields.Ativo[this]; }
            set { Fields.Ativo[this] = value; }
        }

        [DisplayName("Pago")]
        public Boolean? Pago
        {
            get { return Fields.Pago[this]; }
            set { Fields.Pago[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Cad Conta Id"), Expression("jCadCartaoCredito.[CadContaId]")]
        public Int32? CadCartaoCreditoCadContaId
        {
            get { return Fields.CadCartaoCreditoCadContaId[this]; }
            set { Fields.CadCartaoCreditoCadContaId[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Cad Grupo Familiar Id"), Expression("jCadCartaoCredito.[CadGrupoFamiliarId]")]
        public Int32? CadCartaoCreditoCadGrupoFamiliarId
        {
            get { return Fields.CadCartaoCreditoCadGrupoFamiliarId[this]; }
            set { Fields.CadCartaoCreditoCadGrupoFamiliarId[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Cad Usuario Id"), Expression("jCadCartaoCredito.[CadUsuarioId]")]
        public Int32? CadCartaoCreditoCadUsuarioId
        {
            get { return Fields.CadCartaoCreditoCadUsuarioId[this]; }
            set { Fields.CadCartaoCreditoCadUsuarioId[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Codigo Tab Tipo Cartao Credito"), Expression("jCadCartaoCredito.[CodigoTabTipoCartaoCredito]")]
        public Int32? CadCartaoCreditoCodigoTabTipoCartaoCredito
        {
            get { return Fields.CadCartaoCreditoCodigoTabTipoCartaoCredito[this]; }
            set { Fields.CadCartaoCreditoCodigoTabTipoCartaoCredito[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Titulo"), Expression("jCadCartaoCredito.[Titulo]")]
        public String CadCartaoCreditoTitulo
        {
            get { return Fields.CadCartaoCreditoTitulo[this]; }
            set { Fields.CadCartaoCreditoTitulo[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Descricao"), Expression("jCadCartaoCredito.[Descricao]")]
        public String CadCartaoCreditoDescricao
        {
            get { return Fields.CadCartaoCreditoDescricao[this]; }
            set { Fields.CadCartaoCreditoDescricao[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Dia Vencimento Fatura"), Expression("jCadCartaoCredito.[DiaVencimentoFatura]")]
        public DateTime? CadCartaoCreditoDiaVencimentoFatura
        {
            get { return Fields.CadCartaoCreditoDiaVencimentoFatura[this]; }
            set { Fields.CadCartaoCreditoDiaVencimentoFatura[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Dia Pagar Fatura"), Expression("jCadCartaoCredito.[DiaPagarFatura]")]
        public Int32? CadCartaoCreditoDiaPagarFatura
        {
            get { return Fields.CadCartaoCreditoDiaPagarFatura[this]; }
            set { Fields.CadCartaoCreditoDiaPagarFatura[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Dia Fechar Fatura"), Expression("jCadCartaoCredito.[DiaFecharFatura]")]
        public Int32? CadCartaoCreditoDiaFecharFatura
        {
            get { return Fields.CadCartaoCreditoDiaFecharFatura[this]; }
            set { Fields.CadCartaoCreditoDiaFecharFatura[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Valor Limite Total"), Expression("jCadCartaoCredito.[ValorLimiteTotal]")]
        public Decimal? CadCartaoCreditoValorLimiteTotal
        {
            get { return Fields.CadCartaoCreditoValorLimiteTotal[this]; }
            set { Fields.CadCartaoCreditoValorLimiteTotal[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Valor Limite Atual"), Expression("jCadCartaoCredito.[ValorLimiteAtual]")]
        public Decimal? CadCartaoCreditoValorLimiteAtual
        {
            get { return Fields.CadCartaoCreditoValorLimiteAtual[this]; }
            set { Fields.CadCartaoCreditoValorLimiteAtual[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Saldo"), Expression("jCadCartaoCredito.[Saldo]")]
        public Decimal? CadCartaoCreditoSaldo
        {
            get { return Fields.CadCartaoCreditoSaldo[this]; }
            set { Fields.CadCartaoCreditoSaldo[this] = value; }
        }

        [DisplayName("Cad Cartao Credito Ativo"), Expression("jCadCartaoCredito.[Ativo]")]
        public Boolean? CadCartaoCreditoAtivo
        {
            get { return Fields.CadCartaoCreditoAtivo[this]; }
            set { Fields.CadCartaoCreditoAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CadFaturaCartaoCreditoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MesVigente; }
        }
               

        public static readonly RowFields Fields = new RowFields().Init();

        public CadFaturaCartaoCreditoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CadFaturaCartaoCreditoId;
            public Int32Field CadCartaoCreditoId;
            public Int32Field MesFaturaVigente;
            public DateTimeField DiaVencimentoFatura;
            public DateTimeField DataPagamentoFatura;
            public DateTimeField DataFechamentoFatura;
            public Int32Field DiaFecharFatura;
            public DecimalField ValorParcialFaturaAtual;
            public BooleanField IsParcelarFatura;
            public Int32Field NumParcelasFatura;
            public DecimalField SaldoAnterior;
            public BooleanField Ativo;
            public BooleanField Pago;
            public StringField MesVigente;

            public Int32Field CadCartaoCreditoCadContaId;
            public Int32Field CadCartaoCreditoCadGrupoFamiliarId;
            public Int32Field CadCartaoCreditoCadUsuarioId;
            public Int32Field CadCartaoCreditoCodigoTabTipoCartaoCredito;
            public StringField CadCartaoCreditoTitulo;
            public StringField CadCartaoCreditoDescricao;
            public DateTimeField CadCartaoCreditoDiaVencimentoFatura;
            public Int32Field CadCartaoCreditoDiaPagarFatura;
            public Int32Field CadCartaoCreditoDiaFecharFatura;
            public DecimalField CadCartaoCreditoValorLimiteTotal;
            public DecimalField CadCartaoCreditoValorLimiteAtual;
            public DecimalField CadCartaoCreditoSaldo;
            public BooleanField CadCartaoCreditoAtivo;
        }
    }
}
