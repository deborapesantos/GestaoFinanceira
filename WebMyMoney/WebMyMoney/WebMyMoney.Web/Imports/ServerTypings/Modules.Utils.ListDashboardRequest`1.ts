namespace WebMyMoney.Modules.Utils {
    export interface ListDashboardRequest<T> extends Serenity.ServiceResponse {
        Entities?: T[];
        Values?: any[];
        ListaTodasReceitasDoMes?: DespesaMesModel[];
        ListaProximosVencimentos?: DespesaMesModel[];
        ListaDespesaCategoria?: DespesaMesModel[];
        ListaCartaoCredito?: CartaoCreditoModel[];
        ListaGrupo?: Modules.Default.CadDespesa.ActionSelect[];
        SaldoAtual?: number;
        TotalReceitas?: number;
        TotalDespesas?: number;
        NomeGrupoAtivo?: string;
        MesVigente?: number;
        Skip?: number;
        Take?: number;
    }
}

