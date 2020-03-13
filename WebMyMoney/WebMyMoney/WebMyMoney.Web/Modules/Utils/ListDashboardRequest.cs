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
        public int CadContaId { get; set; }

        public int CadUsuarioId { get; set; }
        public int CadDespesaId { get; set; }
        public decimal Valor { get; set; }
        public DateTime DataVencimento { get; set; }
        public string Descricao { get; set; }
        public int Qtde { get; set; }



    }

    public class CartaoCreditoModel
    {
        public List<CadDespesaRow> listaDespesaCartaoCredito { get; set; }
        
        public string Descricao { get; set; }

        public string Titulo { get; set; }

        public string Icone { get; set; }

        public int CadCoartaoCreditoId { get; set; }
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