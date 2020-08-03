
namespace WebMyMoney.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using WebMyMoney.Default.Entities;
    using WebMyMoney.Modules.Default;
    using WebMyMoney.Modules.Default.CadDespesa;
    using WebMyMoney.Modules.Default.CadReceita;
    using WebMyMoney.Modules.Utils;
    using MyRow = Entities.CadReceitaRow;

    public class CadReceitaRepository
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

        public ListScreenViewModel<MyRow> ListCadReceita(IDbConnection connection, DefaultListRequest request)
        {
            DateTime dataAtual = DateTime.Now;
            var lastDayOfMonth = DateTime.DaysInMonth(dataAtual.Year, request.mes);

            //var receitasMes = connection.List<MyRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
            //    && fld.DataCriacao > new DateTime(dataAtual.Year, request.mes, 1)
            //    && fld.DataCriacao < new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)).ToList();

            var receitasMes = connection.List<CadReceitaRow>(fld.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
               && ((CadReceitaRow.Fields.DataRecebimento >= new DateTime(dataAtual.Year, request.mes, 1))
               && CadReceitaRow.Fields.DataRecebimento <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth)) ||
                ((CadReceitaRow.Fields.DataCriacao >= new DateTime(dataAtual.Year, request.mes, 1))
               && CadReceitaRow.Fields.DataCriacao <= new DateTime(dataAtual.Year, request.mes, lastDayOfMonth))).ToList();

            return new ListScreenViewModel<MyRow>()
            {
                Lista = receitasMes,
                TotalConcluido = receitasMes.Count(x => x.Recebido == true),
                TotalPendente = receitasMes.Count(x => x.Recebido != true)

            };

        }

        public MyRow CriarReceita(IDbConnection connection, CadReceitaRetrieveRequest request)
        {
            System.Globalization.CultureInfo cultureinfo = new System.Globalization.CultureInfo("en-US");
            var receita = new CadReceitaRow()
            {

                CadContaId = request.CadContaId,
                CadGrupoFamiliarId = (int)((UserDefinition)Authorization.UserDefinition).CadGrupoFamiliarId,
                CadUsuarioId = (int)((UserDefinition)Authorization.UserDefinition).UsuarioId,
                CodigoTabTipoReceita = request.CodigoTabTipoReceita,
                Titulo = request.Titulo,
                Descricao = request.Descricao,
                DataRecebimento = DateTime.Parse(request.DataRecebimento.ToString(), cultureinfo),
                DataCriacao = DateTime.Now,
                DataFixaRecebimento = request.DataFixaRecebimento,
                IsFixo = request.IsFixo,
                Valor = Convert.ToDecimal(request.Valor.Replace("R$", ""), new System.Globalization.CultureInfo("pt-Br")),
                Recebido = request.Recebido,
                Juros = request.Juros,
                Rendimento = request.Rendimento,
                Imposto = request.Imposto,
                Ativo = request.Ativo
            };

           

            if (request.CodigoTabTipoReceita == 0)
                receita.CodigoTabTipoReceita = null;

            if (!request.IsFixo && request.DataFixaRecebimento == 1)
                receita.DataFixaRecebimento = null;



            if (receita.Recebido == true)
            {
                var conta = connection.ById<CadContaRow>(receita.CadContaId);

                if (conta != null)
                {
                    conta.SaldoAtual = conta.SaldoAtual + receita.Valor;
                    connection.UpdateById<CadContaRow>(conta); 
                }
            }

            connection.Insert(receita);


            return receita;


        }

        public TabelasAuxiliaresViewModel GetTabelasAuxiliares(IDbConnection connection, CadReceitaRetrieveRequest request)
        {
            var tabelasAux = new TabelasAuxiliaresViewModel();
            tabelasAux.ListaConta = new List<ActionSelect>();
            tabelasAux.ListaParticipante = new List<ActionSelect>();
            tabelasAux.ListaTipoReceita = new List<ActionSelect>();
            tabelasAux.ListaGrupo = new List<ActionSelect>();

            if (request.CadReceitaId > 0)
            {
                tabelasAux.receita = connection.ById<CadReceitaRow>(request.CadReceitaId);
            }

            var close = new ActionSelect()
            {
                id = 0,
                text = "Cancelar",
                icon = "",
                iconColor = ""
            };

            var conta = connection.List<CadContaRow>(
                CadContaRow.Fields.CadUsuarioId == (int)((UserDefinition)Authorization.UserDefinition).UsuarioId
                ).ToList();

            foreach (var item in conta)
            {
                tabelasAux.ListaConta.Add(new ActionSelect()
                {
                    id = item.CadContaId ?? 0,
                    text = item.Titulo,
                    icon = "",
                    iconColor = "",
                    idFilter = item.CadGrupoFamiliarId ?? 0
                });
            }
            tabelasAux.ListaConta.Add(close);

            var participantes = connection.List<CadParticipanteRow>(
                CadParticipanteRow.Fields.CadGrupoFamiliarId == (int)((UserDefinition)Authorization.UserDefinition).CadGrupoFamiliarId
                ).ToList();

            foreach (var item in participantes)
            {
                tabelasAux.ListaParticipante.Add(new ActionSelect()
                {
                    id = item.CadParticipanteId ?? 0,
                    text = item.NomeRazaoSocial,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaParticipante.Add(close);

            var tipoReceita = connection.List<TabTipoReceitaRow>().ToList();

            foreach (var item in tipoReceita)
            {
                tabelasAux.ListaTipoReceita.Add(new ActionSelect()
                {
                    id = item.CodigoTabTipoReceita ?? 0,
                    text = item.Descricao,
                    icon = "",
                    iconColor = ""
                });
            }
            tabelasAux.ListaTipoReceita.Add(close);

            var grupos = connection.List<CadGrupoFamiliarRow>().ToList();

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


        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {

                base.BeforeSave();

               if(Row.Recebido == true)
                {
                    var conta = new CadContaRepository().Retrieve(this.Connection, new RetrieveRequest() { EntityId = Row.CadContaId });
                    
                    if(conta != null)
                    {
                        conta.Entity.SaldoAtual = conta.Entity.SaldoAtual + Row.Valor;
                        new CadContaRepository().Update(UnitOfWork, new SaveRequest<CadContaRow>() { EntityId = conta.Entity.CadContaId, Entity = conta.Entity });
                    }
                }


            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}