using Serenity.Services;
using System;
using System.Collections;
using System.Collections.Generic;
using WebMyMoney.Default.Entities;

namespace WebMyMoney.Modules.Utils
{
    public class ListDashboardRequest<T> : ServiceResponse
    {
        public List<T> Entities { get; set; }
        public List<object> Values { get; set; }

        public List<DespesaMesModel> ListaTodasReceitasDoMes { get; set; }
        public List<DespesaMesModel> ListaProximosVencimentos { get; set; }
        public List<CartaoCreditoModel> ListaCartaoCredito { get; set; }
        public decimal SaldoAtual { get; set; }
        public decimal TotalReceitas { get; set; }
        public decimal TotalDespesas { get; set; }

        public int MesVigente { get; set; }
        public int Skip { get; set; }
        public int Take { get; set; }




    }

    public class DespesaMesModel
    {
        public Int32 CadDespesaId { get; set; }
        public Int32 CadContaId { get; set; }
        public Int32 CadGrupoFamiliarId { get; set; }
        public Int32 CadUsuarioId { get; set; }
        public Int32 CadFaturaCartaoCreditoId { get; set; }
        public Int32 CodigoTabTipoDespesa { get; set; }

        public Int32 CadParticipanteId { get; set; }
        public String Titulo { get; set; }

        public DateTime DataPagamento { get; set; }

        public DateTime DataCriacao { get; set; }
        public Boolean IsFixo { get; set; }
        public Int32 DataFixaVencimento { get; set; }
        public Boolean IsParcelado { get; set; }

        public Int32 QdteParcelas { get; set; }
        public DateTime DataVencimento { get; set; }
        public Decimal ValorTotal { get; set; }
        public Decimal MultasJuros { get; set; }
        public Boolean Pago { get; set; }

        public Boolean Ativo { get; set; }
        public Decimal Imposto { get; set; }
        public Decimal Descontos { get; set; }
        public decimal Valor { get; set; }
        public string Descricao { get; set; }
        public int Qtde { get; set; }

    }

    public class CartaoCreditoModel
    {
        public List<CadDespesaRow> listaDespesaCartaoCredito { get; set; }
        
        public string Descricao { get; set; }

        public string Titulo { get; set; }

        public string Icone { get; set; }

        public int CadCartaoCreditoId { get; set; }
        public int CadFaturaId { get; set; }
        public int CadContaId { get; set; }
        public int CadUsuarioId { get; set; }
        public decimal ValorFatura { get; set; }
        public int DiaVencimento { get; set; }
        public DateTime DataPagamento { get; set; }

        public decimal LimiteTotal { get; set; }
        public decimal LimiteDisponivel { get; set; }

        public bool FaturaAberta { get; set; }

        public int Tipo { get; set; }
    }
}