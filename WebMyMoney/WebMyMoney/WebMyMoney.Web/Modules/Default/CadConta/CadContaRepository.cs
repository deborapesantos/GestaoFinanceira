
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CadContaRow;
    using System.Linq;
    using WebMyMoney.Modules.Utils;
    using WebMyMoney.Modules.Default;
    using System.Collections.Generic;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Default.CadReceita;

    public class CadContaRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public ListResponse<MyRow> ListWithoutTennant(IDbConnection connection, DefaultListRequest request)
        {
            return new ListWithoutTennantHandler().Process(connection, request);
        }
        public ListDashboardRequest<MyRow> GetDashboard(IDbConnection connection, DefaultListRequest request)
        {
            var usuario = connection.ById<CadUsuarioRow>((int)((UserDefinition)Authorization.UserDefinition).UsuarioId);
            var despesaFld = CadDespesaRow.Fields;
            List<DespesaMesModel> despesaMes = new List<DespesaMesModel>();
            List<CartaoCreditoModel> cartao = new List<CartaoCreditoModel>();
            List<DespesaMesModel> proximosVencimentos = new List<DespesaMesModel>();
            DateTime dataAtual = DateTime.Now;
            int anoAtual = DateTime.Now.Year;
            var saldo = connection.List<MyRow>(fld.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId).Sum(x => x.SaldoAtual).GetValueOrDefault();
            var lastDayOfMonth = DateTime.DaysInMonth(anoAtual, request.mes);

            var totalReceita = connection.List<CadReceitaRow>(CadReceitaRow.Fields.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId
                && ((CadReceitaRow.Fields.DataRecebimento >= new DateTime(anoAtual, request.mes, 1))
                && CadReceitaRow.Fields.DataRecebimento <= new DateTime(anoAtual, request.mes, lastDayOfMonth)) 
               
                && CadReceitaRow.Fields.Recebido == 1
                ).Sum(x => x.Valor).GetValueOrDefault();

            var totasDespesasMes = connection.List<CadDespesaRow>(
                   despesaFld.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId
                && despesaFld.DataVencimento > new DateTime(anoAtual, request.mes, 1)
                && despesaFld.DataVencimento < new DateTime(anoAtual, request.mes, lastDayOfMonth)
                ).ToList().Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var vencidos = connection.List<CadDespesaRow>(
                   despesaFld.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId
                && despesaFld.DataVencimento <= dataAtual 
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var estaSemana = connection.List<CadDespesaRow>(
                   despesaFld.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId
                && despesaFld.DataVencimento >= dataAtual 
                && despesaFld.DataVencimento <= dataAtual.AddDays(7)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var esteMes = connection.List<CadDespesaRow>(
                   despesaFld.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId
                && despesaFld.DataVencimento >= dataAtual 
                && despesaFld.DataVencimento <= dataAtual.AddDays(30)
                && despesaFld.Pago != 1).Where(x => x.CadFaturaCartaoCreditoId == null).ToList();

            var totalDespesas = totasDespesasMes.Sum(x => x.ValorTotal).GetValueOrDefault();

                DespesaMesModel vencido = new DespesaMesModel()
                {
                    CadGrupoFamiliarId = (int)((UserDefinition)Authorization.UserDefinition).CadGrupoFamiliarId,
                    CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                    Descricao = "Vencidos",
                    Valor = vencidos.Sum(x => x.ValorTotal) ?? 0,
                    Qtde = vencidos.Count()
                };
           
            despesaMes.Add(vencido);

            despesaMes.Add(new DespesaMesModel()
            {
                CadGrupoFamiliarId = (int)usuario.CadGrupoFamiliarId,
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                Descricao = "Esta semana",
                Valor = estaSemana.Sum(x => x.ValorTotal) ?? 0,
                Qtde = estaSemana.Count()
                
            });

            despesaMes.Add(new DespesaMesModel()
            {
                CadGrupoFamiliarId = (int)usuario.CadGrupoFamiliarId,
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                Descricao = "Próximos 30 dias",
                Valor = esteMes.Sum(x => x.ValorTotal) ?? 0,
                Qtde = esteMes.Count()
            });

            

            var cartaoCredito = connection.List<CadCartaoCreditoRow>(CadCartaoCreditoRow.Fields.CadGrupoFamiliarId == (int)usuario.CadGrupoFamiliarId).ToList();


            foreach (var item in cartaoCredito)
            {
                var faturaMes = connection.List<CadFaturaCartaoCreditoRow>(
                   CadFaturaCartaoCreditoRow.Fields.MesFaturaVigente == request.mes
                   ).FirstOrDefault();

                var despesasCartaoCreditoMes = connection.List<CadDespesaRow>(
                 CadDespesaRow.Fields.CadFaturaCartaoCreditoId == (int)faturaMes.CadFaturaCartaoCreditoId
                   ).ToList();

                

                cartao.Add(new CartaoCreditoModel()
                {
                    CadCartaoCreditoId = item.CadCartaoCreditoId ?? 0,
                    CadFaturaId = faturaMes.CadFaturaCartaoCreditoId ?? 0,
                    CadContaId = item.CadContaId ?? 0,
                    CadUsuarioId = item.CadUsuarioId ?? 0,
                    DataPagamento = faturaMes.DataPagamentoFatura ?? new DateTime(),
                    Descricao = item.Descricao,
                    DiaVencimento = item.DiaPagarFatura ?? 1,
                    LimiteDisponivel = item.ValorLimiteAtual ?? 0,
                    LimiteTotal = item.ValorLimiteTotal ?? 0,
                    FaturaAberta = faturaMes.Pago.GetValueOrDefault() ? false: true,
                    ValorFatura = despesasCartaoCreditoMes.Sum(x=>x.ValorTotal ?? 0),
                    Titulo = item.Titulo,
                    listaDespesaCartaoCredito = despesasCartaoCreditoMes,
                    Pago = faturaMes.Pago ?? false
                });

            }



            foreach (var item in esteMes)
            {
                proximosVencimentos.Add(new DespesaMesModel()
                {
                    CadContaId = item.CadContaId ?? 0,
                    CadDespesaId = item.CadDespesaId ?? 0,
                    CadUsuarioId = item.CadUsuarioId ?? 0,
                    DataVencimento = item.DataVencimento ?? DateTime.Now,
                    Descricao = item.Titulo,
                    Valor = item.ValorTotal ?? 0,
                    Ativo = item.Ativo ?? false,
                    CadGrupoFamiliarId = item.CadGrupoFamiliarId ?? 0,
                    CadFaturaCartaoCreditoId = item.CadFaturaCartaoCreditoId ?? 0,
                    CadParticipanteId = item.CadParticipanteId ?? 0,
                    CodigoTabTipoDespesa = item.CodigoTabTipoDespesa ?? 0,
                    DataCriacao = item.DataCriacao ?? DateTime.Now,
                    DataFixaVencimento = item.DataFixaVencimento ?? 0,
                    DataPagamento = item.DataPagamento ?? DateTime.Now,
                    Descontos = item.Descontos ?? 0,
                    Imposto = item.Imposto ?? 0,
                    IsFixo = item.IsFixo ?? false,
                    IsParcelado = item.IsParcelado ??  false,
                    MultasJuros = item.MultasJuros ?? 0,
                    Pago = item.Pago ?? false,
                    Titulo = item.Titulo,
                    ValorTotal = item.ValorTotal ?? 0

                });
            }

            var porCategoria = new List<DespesaMesModel>();

            var despesasPorCategoria = totasDespesasMes.GroupBy(x => x.CodigoTabTipoDespesa).Select(x => x.Key);

            foreach (var item in despesasPorCategoria)
            {
                var categoria = connection.ById<TabTipoDespesaRow>(item.Value);
                string icone = "";
                if (categoria.CodigoTabTipoDespesa == 1)//alimentacao
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9dJREFUeNrsWu2R2jAQNQx/M3EJooJzKohdwUEFBwVkAmng7hoI3KQAuAowFeCrAKcC3EGcSQGX3cxTZiNk2YcxOAw7o/Fiy/I+ab+0ouOBvr37EtIl/fTra+6dmOjbK7oMKnRNqUU2GXsCxIY7Ej+kjtmJsTCIHIIWkaIWoCVWIBggRacdgZnT9fHEq8PaEDlW7YEu90XP/wBhganjGkCYJtRCure3jHSP+8xqCDstUbMZZJoSPyL2lvhh2cA9wScGYhZ4YwGzwjIfQjw5axovcfSZ4MqA7/BO+BYgJuUAw4JHhq56xr0immEMFuqG2qgE5KtYmVfxbFMHSAIh+AMjmsWlfFgyq1qYXNig7+g6hjYo9DVtM8S9ZdF3bUAy4SGmWJHPPEhTVs6TRKAVwExNYbE6TvvqFgBJxezw7wBG3lQc8aF6LlIAWxlILvw0C/8slrcJEGzcOxEQc0cc2bIbBvBCIPrhd2o/BRAN6ubIANj2dnAIPr7DHtIWFPtQbR/qt4NrtgIJLCsiZ0jVkFtHbR43IyEG8ERKpB1RkSFzpkFtDEAJAC2wmnvGHlN7L4yao3vMM4RI/yL8e1V6gpHqzCGGWizwfAkBqzoFttcIq8FjzIjn8ZOuTNrgFXjp7sHf4dkjzwLxG8xIwjwPyIJxHx2R+ap5oo8wUt8IeD4maXyolxMTyh7V6xjBJxUqJvlMqFZu2JR8JnlzrAip0AaOo183OaWxfrAcNE7H9FoBBM0LQGQA4IPXtiN52/uBUKdQqEntRBOAVNfidiO0BBH3A+xnTh/vw3YkH6PPuOT9lwYzZ9VzpNGSHwr9nNp4OIll2ftNUde7ELoCuQK5AmkfkL++/wipf6A3eecAspapRc0Sks6anVvdpkgXOSYye31jJt0X2cbzWYCwGhAAr0JBrhAIcja5oz3LilQqyF291v9OvTYIgQrN1tElQ7bdbiCWOoE19rQeiN6LX4JqKbGDdBYzCHTcZtXyvWoFwHXbVYtLTjJaFwXCtO3Gru3k4ILERcaRADWnJmnPWFHMO6TSr4qAVDW4Wim85Rht4NWrKysTSHLMJM7hah9kkCuL2I5xRnDZfM64PIeN3Go1qzlOjIwgPJexB8JL1fFyudg2B5fitfzrfqTNQNSJvplBr33DC/GB0cR20IkDJeWIJWlXDK6Ea2y6isI000JDSA7GHBw3EgzxC7jZrTwih6wKm65cn1hxUFoJUFlDIJ7gabYIwNrzBN6//4zQMiiLpiTGff5bVtwRCAeYkSZVjP/VMBf/MAqNuPBouc+Ahgh8E+P+VKc8vwUYANTwt3oZ0Wn7AAAAAElFTkSuQmCC";
                }
                else if (categoria.CodigoTabTipoDespesa == 2)//educacao
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9ZJREFUeNrsWe1t4kAQtVH+nkQJpoKQCuJUcKQCnAJOwDVAaOAAXQEhFZhUEKggvgrCdWDpCribid7oRhuvWdtrB6SstLFY2+N58/l2EwSf47RG2Jbgn1++x3QZ00ywtKH5+O3Pj93JAyHl+3QZ0ZzQHFoey2iuaW4JVH5SQAjAEMoziD6WD+wBeCKAZ9hDEX4ziC2DIkDZhwIhAKJcrJa3CKGt5Z0R3hmp5R3e2XQGhBSJYP1EWT+H5dm6hy7lVAZisX5jS/qSHTpYzRbbi6pWc/TS3JZrZd8LK8RxK9WmYvWz5l9ovDz1VVlQyeYqXHbwYuaxIq7EqGFB45IH13BnXjNEXtSHA2WYqzohCUMnABWpW2+N9oL+PBsA7jx0X6lELOcWaym8w/fuqwqEQVc8YfwHAGJ5yQUQidv4xgM9eDS5jgwJnxgAAhViY5If1JFfVnw4tFJ44hdi+p3b6niI5C6Rc4Hh8ahqASkJ/wXNS5bJQP4C1QyJPfSVM4hrqToZv2tJXjHak1SkYzkBI7AMNlifgbwWVSkobxPkhR9ZynyO3BoVGRK6vKtioUvfQHy31leU9cdFfUMBs/aV0JJMkyL+45vFGmHGYTujtXvk6gJyJy6dPqzLf+DFSR1+ZJG9MoDkRg6Vyg4dS14RS12rvcZRFuvKdhWQSmw4rBgKSVmclngxOOLZMZrerQLCoXPnqlvPpbLQnOJDLPyKaQYslSN+U1X9+OMDdT/GFOsO8EyEd1LIiI1P/8b3pwDbDAg8sDToQgZriVLS6NiSr7g+qvvy7KPxTCS0CPeLxhI6lI6LJmUTZZetvDG6r8yDqnYvvliDdyAGKFZoR4BmRiNd+mLVnQApYakSFuu2zrRaAVLkpS5OGnuuD4JG1KEfvC14aEBdvAGRWJ422GQlNd+dGjo0AiJVZw5u1NW41PnVGAjifIWfzx2CEaK4cSkSPceknYG29zsGk2HD5y/ZadwoMC9CW1oGcePab5yBsEDwLGG8S+ZKIIpNd4pJgWGeqjTNyn2EORZ99AkdW05dlgC4575xTAGUVW6W1watX3XaEHFAsDVo/VTKJa3n6khIlJfzs2HBwV2GHeHHdHbs1jZIfrbwV6WoScvjggOGPfb8h6bh2fb/EG3lvGwPnyp6f+t6DtAa16pJEFNF9SP8Hvguv10MVp6rY4jwi7DXPzsgbycn2AL3AepwjkBm4ong/zHuxyZ7jeIg/0+5QhlfYXssjfj0PYJqNVS0f66o/9CF251KaMXqvEuaZd9yJnbSQK5x3Rvre+P+WSS7dPvc8vtznNX4J8AAepgnGOwCQJEAAAAASUVORK5CYII=";
                }
                else if (categoria.CodigoTabTipoDespesa == 3)//lazer
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHBJREFUeNrMWetx4jAQtj38vTmngiMVhFQQqCBQQUIBNwnXAKGBAHMFABXEVIBTQdxB3EG4uQZuxXzLLEKyZePHaWbHCVpJ+1n7tu81NH5/+xXSY0fUI4qJRj//vu4NfH16vBEp/jHxrF3291sAwUOBiIi2+FvN3RP1teVOYPyGQSiBx0RPBoElwCVRSrRyBeM3DGJAAiWY69JjSHRDpP5+h/ARqxzxPLqC8dsAUXAfJzD+/wyiCJigaRA0PyR6LrInBB/j3xWA1QfE8SbmIK9KMEEL6jQgui1zRhYYv02bwLoe8caX2kzQsmErW9khml90M0HL3klF9gVRUlLNZgzGbxFEFZrwiZxs0akLBHhWiNabPJCI9B9Ea+KdOIgxBIhY8XdqvIkeDjvYAq1LoUp5oP44ivKA56aw1yqqTsT/hbe2x5MHg1rS+rSkVvDeVyo3C2q2iQjPGeIHjy481irjvLwMIITR750DoqNNdIleiGTNsRVqwNE8AaiZ8DqmkZcBpMK2vE5FIHrgUbw/2McTX0Rze1FQJVi/R5WYNQaaOuojwc2qGJQdEEuA8ISB6+olQeil7SFaE+34RpXtiNolNARNvu2pmg8qsIkpQCQgdejQcKBnAMGR/Qv20rdUjmcZAAIi38oqqMCwlaBrqMIGv92LAyPs0bXpuaZCd6z3DhkAr+93Lgh2XfU73swav0cw0KHIhbyMbDfUdL4nAt1AvIxEB0FnrcB7kDEoaRMqNfjQawLEhDP1gr6b4sVKC6D8lpc5tqvWPUoZgwsN21StnalXxphAZRikSjeuoY7OII7ut4BNvAnD3kCNFJi9OJzVq2vwTimMeY46YoG5d+xd+CZ4rlPQsEMR0IZapD6qEe05MIDYGXKxSDgEvyyIQ65FDB8lKrsh3qCHbHUMV5qa1AJe6NMQ0CYu1WEeCFatnigZE62cnFsWPoiu4EQ7yKTffa2TGOJcte76UhCca/EbeTKokS1FmAmBPnEQG68tb9JdbpLBXwgEq5astK5d02qDB7N2AaGK3KRWTxV/bqsCcaxHxKIJexJDfHlGXzbRwExRLEUi7UgBUO07o7kXYfRT1CFRVSBk9rvFwhsLHwus5kdaxB1p3klPvb8L/jgv6y0DQtYje92NahE7hssd53Q2YrHXsbY2tTirBCFvhD3Xe46Q0p16uj1B4FCkGl3OTjkfqwOEBHKvZZN5g438yuKW5e1GIm2pBQRHdq4BbDHANJYW1zzBXneI/CpAjuoGwTfCEXpp+jhpUbOF5fdDuo10/qSoqhMEAwkLqpWpoXySAcB2Rk2BYK+V+QHFYYQ5TYLaQciAeNamr7FnWzmIk05jFWBsGUDdIE4adC7f6RwGZwDTJkGcdRovBWPLAOoGYW1iV2kzTYDI7MZXZDONgPAc6uQzMDDoR1FbhIhBSsgtA24SRC4QA5gFhMtrLqeyedbEJ7nAwYClA3gGiBiRW31k8VF3jwGg1zQIpxsx3MzC9o0PajdH4jhq8uPoPwEGAHz/N4+yjN++AAAAAElFTkSuQmCC";
                }
                else if (categoria.CodigoTabTipoDespesa == 4)//moradia
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlVJREFUeNrsmtFtwjAQQLHFbyWYAEZghGaDdgNngKqlC7Qs0Hx0gGQDygSwAYzACJE6QGtX5+ri2iZubONATooCMbnci8935xOj0YUICan8/eZ5wU9b+Jo9fL4degeCICZwqQ4JQyNA1HBZfN7CWPogGoiMH3loGBrYnZbClfhRKTBr/ttJkiAaCCGP0mAFZg4zM0kKBAwqEcQK3GqBDVZgFj5hqCeILRgmJOcGv8LaiAZDA0BU8PkIx8gAs/IJQ0NAKGMHNDOlvB9mrfIFQz1BVBaIDLnZHR/HMLkCU0YDMUDkJgg+VkM2l+uCWWAaoKFnpHCBQAZ/tIRh/4EhjrMhHsBcIRQdDLnQrw6bfq8gPiAMMCtY+HJsr5txL67lE0KTS14ATEoGupzcjDpCiAcsu0AoMDKXlBIGdKgwrJNrcQViYT8hiB9ju0JYXpQpF6nJtj2I4sdBIHzCkHNDGGDuIVy3hiEpQGhgGttifl2U/XtUXf+BIalAIBvWIsNrYNT9TgOGGiBq+GFUCGkgPKexLQagDPUACrxlJgAh3sAaKVui8FdEhNDVczXA1ai4LNTODNH4n06iQViKU5OIonTatmjcxIQwJEarjPkNYhc3NbyVr3O2QWGNbmBWdvx7FrVBdw65GJCxx8U5h36VixzBtdMA0YRvl3tFNNyl4lpderm3SbkWiDWyhIyIQ9QaQAaQAeRKM7thy+rULUxxRphy7i1IpZz76VrgTvmw2IeodVpmPBLZqtRZBxu86G4LwgJGIC+6T7mW6z95XDotIXX3V74FGACD/L4ojAda5wAAAABJRU5ErkJggg==";
                }
                else if (categoria.CodigoTabTipoDespesa == 5)//pagamentos
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABTdJREFUeNrMWu1x00AQlRn/ZRAdKBVEqQC5AuwKYhfA2KIByw1geyjATgU4FViuAFEBpgLEUADsZt7CctydpERnuJkbxbI+9u3u2y9nEF1wvX/+NqbDmPYr2hntxHJZRbukff/m+7uy7bMHFwSwoD2nHRtfi7B8PjW+O9NeEaD9PwdCINgCOwWABb/jIwl4tlzPYG5huUTdM7NdfxEgJNQalhBhWLslhM3gYrFhgRPtA11X03VT+nuNa2raE5e7DQKCYCtM8TEnATZ0joVfAkTTYndaAcAOFopgmf1FgJDABQRmIXLWsCFMDUFP+FsWu9Jr4zpWwl4phs+N6FwVFAi0fhTtAcQRRGYhtiRE0fCMBC4lgPZ0z0yBYRe8YfeTe54FMMgaxw1cQEBU0GTR9AAmNe0JFMFrCivneE6iuNe/RUDOnWgM7rWAJa60Bi2RbW6LTOqZvEY4Hs1n9m2ROY4rRBrR2sgDooAV2SU/wDW1dYT0D9ZG1Crx/GnvrgW/fuABXr5U/l01BAXJF3z/EeFZrw2snALoFudvQ3BENHnAcays41oClvPDAJFMnxer1Fp4+nyAa6WoGnoFco3jCRrlF1S+bCxJEIJp0LHluoOhsEpZsVcgqcrOqVFH+VYCskcAPUN0+iuSwQrihif93mGgxC4v+wYufLBouYbvL0By0XLu4hS+z8DHSFvvWXSZNYZL6D0mgXO409kge9b1BaGAiGAvcLxCDtD7igReoEC8Msg+97mvwbu6b9eqVLN01sTEi8+O6rhC8oxQ3k9tZIc7xeo5rzTp+7TIJ3kBkpaEx6QpSAjZVV6oHe6pA0gaCkhpvPBgywnGknDLZP+hMvXWUzXcAbiE935LFLgPaydGfbRSBV/quKcwyC6FZWmpABIIXmpQocgumlwC2EZpPPaAyWHRiQXEVFk1R0TLVE8TrB/5DO1xW1vQ54+qjJ95coSvmo4sz1vpliBE+JUeYglBRgAhOWLRpgBFEt2pwrNAY5XCFTeXbnUnAOJrdc+woq3VXaHfv2yr22L4sLbMr54+fICpY0d2Prgaoh7GQWNUzF3GQTNVKf8F5EdDth49EcxjBnRjJMf2AzqgtmXf13CBWZuR5X87MlWEXbWZfHQANFZKShxewOA6DbGHHYT46uCSSdDc5Yo4v9eJDODSLkI/CYiaXNiWuAW76ZiEc5LSAa58qrVbA8HArGmKslNjHa91+l699SOIKCOE8zWsk8I6VV/vgcJkhMRKumPr916icOJDoyRlyUcOHK4KuAsAJNnPUFKGwMHWnwYZPrAF6OEjNTJdovbytca5jVeOnyL2yEUprL8ONUUREnPZvTWmibY+PIFmXwqnLABkSLdXiZGrBE6c6TA0CdWsqqlcv0ZZ4gKwMQMH3DXMXEvNsE5G5q48EazEvcc2AFTClk5xH8IiGYBkZs/u4Yg5uPMBMCto5lUeAsgNfF7mv1Lhxp7yvQLh710VNyqApaqmz6gDy64lykKV0w8vtlWjaoZV9uiuZgW9Mi3WxSJrywvOSEhFiEBhVAvCJetseKjMtlMdWO3oxRM15ZOwuUQIlNBY9wSiUGX/r5a3qURZqFZya3MLW09gEG8NUHzdtsXvIi4AGZSaKDLPmhQ0VJlyrvy/bY5gwDfqx8wMSlnQOW8n6ODBrVLoH2S+aGOFBDWHMGYvzgJ9MW65VhHuj1FqV975yP7iMTUWa5EA5dHvf2eSf46Ztuh37h/Ls4Hj16RIRYpJ2yapwVKm5sWN6z7K/KYpyga/Kv3366cAAwAFmeFvQ7iHVAAAAABJRU5ErkJggg==";
                }
                else if (categoria.CodigoTabTipoDespesa == 6)//compras
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFpJREFUeNrUWutt2zAQlgP9LeJOEGcCKxOY3qCZoM4ABZwuEGeB2kEGiDNB1AkiT1BlgiobyOgA6RH4GFwYkjoqtOsSIGRLR977eHfSIIsct5++L+hyRfPi258f6+xAxlGPNTWud8TUb5pfDoGRQZ9FRPwjXRS7tSbtXPxLRnIiagRTGVnPboi4MqAVzsiM9ikI/sxiuMDew5703UvNN6f5QLNwPFNEyCVttHI82zruFQS/JPhLdk8z8RHT08JaS31EM9HQnLJpiFlCY11DI2tpzgmea8poYiqcRttT5ouZVCMZzMoQ0GotEEFjbTKQ6MqzvsFaPW+gAT0rDkT7VULfM/gr+t2y+1ogc8eSyux9xIg0RCzx/yeu4wDukpnAClpRQi3GjDmjj89HYwG5tmn6s2F+0ljXEFFbSF9h/RpIQ1rsM1x7TYBXzyqH6ksmXWMONVStHJscM2aPAaMZ3oCRSUpGiBat6YXjYFbSA7FmYfRNhGKMbJnmWsvJD+Zk95mXlnwJRythXvz/hsNF0BOz9hWvKK+i+QI1HvTIhXnVGJHo7kD5aPMI0xp6HP8gxkBgXi+IHANoZXRA9A+RYnVqJDPnBJLCmmkpcySIypOb7QSOpUO1pB6RHIwZMoKlI1Q74QR4JXAG10bCyLO1SKLuFEOCz6RPzZHQtExKIIlww4T2L2U2qWltIzUX8o+hJZwgI9p3B8KNeeRSnjBskriKnc6u8RVCuQ7AnKCE0EK8t88MlBmaiV9I5ae5UEgmcimkz6qjqpOcN1cCmJEHbmVn67pmf/DY44Y4XTjM69oj8ZAUYzUS0m5jOfqTSVF8NXXLfj8ZRtAMqDx2PYPqFwEznWCfRUfvTFnC9Dq6YeSzy0Gt8rTuily6ZkD9UiSIWMcCZ1eczhxFS1dNXQsjV5so/BYOq7BP/TeMijqNYFbPEQuNMYVY76xWYlbv0njY5sQKdedWU65A9JoEENzxLogLBt3KLo0sYa52ABpbvvuuHhlbobN1dBcLB1yf9EJ9ACasES19q8FWO3KuEwccD60zdFPuA8lgwRpyvtS8Zo1COwApOyDlHdHK5fCFD475xrNvH2Nygee8UVhJHF3s7C5GukrjfTr6q0bAZSj31y91GoJrTORCJNtFKl/Yjuw49TP7xM+F+dGQpQcjIKs8GmkD0sw6nrlSEV8AeG9aKCfPMneH/BQlLpeCCpw3pyxku2DOkU34nq+wx9rhH3MIsmE0yZoPDkd8ZBnxZo+NBpOU6nFuv4SKfvVGzMzgT3tvizJ/XUe3gwIVnEqUIGYRPlN2BJn/fwxSbLJHc/O+288TMDFiTNQR4bXP8NYneYLNZ2CiDIXdXY+8pxZ4ul+jGXCdkjALhw7zq5Cj5z0Q2F89KLRk2oRMuHBMAhlz3Lco+O7EdaqrVN+k9MUR+1FN8cFiamc4Yhlpej7bOY5YRkpPeG2zuJeeyXFEMQKHnlqS0b+nqZy9L46/AgwAqHLl/UpDT+kAAAAASUVORK5CYII=";
                }
                else if (categoria.CodigoTabTipoDespesa == 7)//saude
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmlJREFUeNrsWf9tgkAUPhr/bWInKN2ADWonKG4AAzTWLqBdoMV0AO0E0gnACWSDsoEkHcC+lzySC4G7A4E7lS+5UCt33Pd+3ceTsQEDBlwFrKovvm7fHLhsYdgG7DOGMX/5+0iqbrgRTI4MIYGYwPgU3TASfDeGkcF4AEtkuhhAZOA+DkSGNfEIItFJAqH6fBkR+1ySXRRaaAkbXLunv3UhN2balMgcxhqGY4DBM9pP/fLLJZpTUdEQ0xa8NaYyj3jqNVeB4BGHSevdsAuBVcNqNpd4EZdHyYl7cLjDjg+tFMIpbY0IEHDhstCU9AlJk/gkIkACq5ZX0Dx9ypIcGyDjNxWN6O5X+hjAeO/zlKeKueD3AM+f1yJC+fBLH31YYKNRa3l0njHSfWmdqrWga6iTBGktfH5Y2JcykTw+V4ZU11VJ3ihJFJusEdcMA5y3p9O6ClNYN6zplRjWForYtg9EW0KCdVXGRx3GtlXwViR7ORokyiURaRRaJFvKYv1eYfojzF+WvXNAOAZ958jshHifCOYGupIdy/Ou4v9F+AXdxnvR0121dhAOS8UqhtJiWRKmkzaIXHey82FBFi1L3ETx/d8xgYgnCIuist52eSA2JfIt6IjILJyy8h5V2jsRktabisSNZEZQLRCDRLnmqiWSMcdz9kjW0j21YUmseaf79xHuDDqUvefIPJIfZq4hKeAW9qVM5IdTuSZgVtiXMpGAYtmhbqPOsMp/o8lEMt+SvDxtOZdiSybsI2coJ1zyhKPSfZH1fnGxtUJnpEug4XxZC8lStA72X59Zvx35hHIiMKFyDrha/AswAAQPyLAGHdHfAAAAAElFTkSuQmCC";
                }
                else if (categoria.CodigoTabTipoDespesa == 8)//transporte
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7NJREFUeNrsWO2N2kAQNYi/kXwVnK8DXwXYFZyp4KCACEgD4AYCUgrAVICpAKeC81WA04GlFJDMRG+luY2/sNd3UeSRLGNYPPtm3nytZQ0yyCCDDDJIexndsvjbpy8O3ZZ0uS31pXSdP//8mnwYEAIxp9vBkF4GsiBA2bsCIRAB3U54jNmqdN26CfbmlK45nnO6fAKTvieQKzYSkuJtxTqbfs8b0PMEerIxHuv+00TGDb3ByrMaELy5a937QCcf8eKYouu4wZpn3I8162xcVgMw7IEFHgMYqz8gTBVWhMfIZJZBbIR4PEBXbx5RgRmbzDACzBYUs7tSrA7IsiGtusgMGYwptjIOhF7qiSCPTe+eqYQE4QiKbZDVjHrE7dkbK8SfR4bao0i2plgVkAhpct+HNwRtE41iHv2+NQaEUyT3RCaKVYk3GEyi+i4tJS/REjWv7PQHF5XWsT5W2HB3iJuyupKjRTrqjef4HwEhmTADnfOSosueuhDgne6RXyZ6HvB6U9ePdYwtD52Gol1EuhYyRjIDsaAK5r1qDhncrVyv8VaCjatYmqv2ZmzQYKmWtpfw0KEH+kWy9kggLgdZ22Ikeie9/rCydQ8U4/h4Ent3JiKI2EWvdG07eoVf7AJY2gMIB+n7TfGeCH4fi4ofOP4kWvQMAZ2VAcGVdtjoRmTSHHN+pOYZWrMQE6f3BoieaVB9T1j4V1dMvxdlpx9irO2S+XThhpKz1QyFOhJDH+/vvirYL1iUw1M+2ohENHirgkMFC5bqAiKGLl/UFE+cG8gC+cdw44oTE1ccEKzxOaXPvkh/ereaYl3ekk4WTldm6l3Q7Ys+bC7TsYqRcc0cwi9hTr7Qna8rfT7AtYlIErI/u8NGbpFADHAR68D8/wLdmch+ywKv2KqyW0iV/KIU36ne5yAqqRIfIE4iUbSRCMGraKw64EvBuoW2V2l0ewI+BnDtMy32tQLniDZ7itTniXhwSgK0iUxhFElNZTSOje9aL5hAt64vmYDvr3jpGRaytPSnkLtaO6J+b1svjgWHeJk4L3C1PbhaUlHgw1HNgZwvMpj8ow+rsHf2CMiulXoFL4TQJ0EoKl9QKh6aDlZqRt9h4w+i3fABcmVwFD4LLygDrqHzEV7aVekrAxLCEi6s4HDxw2wdCA/FJs5ukUZjYfWAdaHgOsJDednoPapwtwJhV/RVvqlRGJ2EpFTRdFh66D1qWKjm2txx7HF42mJ4crSDkLCPQ8JBBhlkkEEG+a/ktwADAGkstWQ4ye/DAAAAAElFTkSuQmCC";
                }
                else if (categoria.CodigoTabTipoDespesa == 4)//outros
                {
                    icone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAo1JREFUeNrsWe1NwzAQTVH+IrpBuwHpBJQJWiZoGACpZYG2C9AiBqCdgDABYQLCBJQJCGIAuCvP6GSS9IModqlPsuyck/O78519djzPkSNHRVSraqCbw8smVW0qHdR10T2jMrj4uEq3le9XAPwEdVN0L6hEVF6p9KiE4J8bnxECXtcsLoGzpWMq91yT5Rfad2/cJn6tckUEcGXxIAP4I4AnK2Q9sIzKFKEBpcUDrVtaPNlQbgCZCeQ2NPnMHxfFkL8GcGl1HbiyeLxh7Kj4aaAdaMEvFVDvcmmtNSPCMp0M4Imy+jrAcwC3c15PsAA8q7aaVbjwE74/I36UOyOw/K0WoIlm9bTALeprAo4B+FW1ZeBnEY9LY8ypOcTMZStCL3WpvhMDXWcBB2DlBseiXQrgFRTBvaNc1yKALwB1ToPNNgCcYta4vJcEePudnYB/MhgC0KI2z0x3BzKSFJ4zVZ7jiw6mOQLOZmrA2EO426mcEY6J04wA9tQKZRnv10p2kKM1v8S77QN91LeNB3eaoz8o2hAHYoOaWcjL3Ac+kevsFBHmEbCP+PngvxysnCJOEafInijimxhUnFX+mqr81L4BJSZU9UsUGXIaY2JG1JFgXJI8vk4yoog6+Y2Q/AU4RqRbzjBnwE3Twd5FQtjfyWDXjrALnDJ3UxGV7IHa9LytqKYpRRLcsgzLlOkbCPIBrnfqJcqMjbjWpleqOa4ZYLGIbAj2v654yj0TlzQ6RZwi+3weoaUtxI7JidwMV/vW8IoU0TenW+15ahkvUxHWMOCfPeJPVMvT7ltt4iH974mUZ3mJHQqteZe0/Tb+yPv+L8/K/Fy+16Ah75KTEs7RVdEyXrwVf3odOSqBvgQYAMrsg/3UrnoVAAAAAElFTkSuQmCC";
                }
                var despesas = totasDespesasMes.Where(x => x.CodigoTabTipoDespesa == item.Value);
                porCategoria.Add(new DespesaMesModel()
               {
                        CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                        Descricao = categoria.Descricao,
                        Valor = despesas.Sum(x => x.ValorTotal) ?? 0,
                        Qtde = despesas.Count(),
                        Icon = icone
                });
            }

            var grupo = connection.ById<CadGrupoFamiliarRow>((int)usuario.CadGrupoFamiliarId);

            return new ListDashboardRequest<MyRow>()
            {
                SaldoAtual = saldo,
                TotalReceitas = totalReceita,
                TotalDespesas = totalDespesas,
                ListaTodasReceitasDoMes = despesaMes,
                ListaProximosVencimentos = proximosVencimentos,
                ListaCartaoCredito = cartao,
                ListaDespesaCategoria = porCategoria.OrderByDescending(x=>x.Valor).ToList(),
                NomeGrupoAtivo = grupo.Titulo
            };
        }


        public MyRow CriarConta(IDbConnection connection, CadContaRetrieveRequest request)
        {
            var valor = Convert.ToDecimal(request.ValorInicial.ToString().Replace("R$.", "").Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br"));


            var conta = new CadContaRow()
            {
                Ativo = true,
                CadGrupoFamiliarId = request.CadGrupoFamiliarId,
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                DataInicial = DateTime.Now,
                Titulo = request.Titulo,
                SaldoAtual = Convert.ToDecimal(request.SaldoAtual.Replace("R$.", "").Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br")),
                ValorInicial = Convert.ToDecimal(request.ValorInicial.Replace("R$.", "").Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br")),
                CodigoTabTipoConta = request.CodigoTabTipoConta

            };

            connection.Insert<CadContaRow>(conta);

            return conta;
        }

        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, CadDespesaRetrieveRequest request)
        {
            var hoje = DateTime.Now;
            var proximoMes = new DateTime(hoje.Year, hoje.Month + 1, 28);
            var tabelasAux = new TabelasAuxiliaresViewModel();
            tabelasAux.ListaTipoConta = new List<ActionSelect>();
            tabelasAux.ListaGrupo = new List<ActionSelect>();

            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };

            var tipoConta = connection.List<TabTipoContaRow>().ToList();

            foreach (var item in tipoConta)
            {
                tabelasAux.ListaTipoConta.Add(new ActionSelect()
                {
                    id = item.CodigoTabTipoConta ?? 0,
                    text = item.Descricao,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaTipoConta.Add(close);


            var grupos = connection.List<CadGrupoFamiliarRow>(CadGrupoFamiliarRow.Fields.CadAssinanteId == (int)((UserDefinition)Authorization.UserDefinition).CaAssinanteId).ToList();

            foreach (var item in grupos)
            {
                tabelasAux.ListaGrupo.Add(new ActionSelect()
                {
                    id = item.CadGrupoFamiliarId ?? 0,
                    text = item.Titulo,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaGrupo.Add(close);

            return tabelasAux;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow>
        {


        }

        private class ListWithoutTennantHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                query.Where(fld.Ativo == 1);
            }

        }


    }
}