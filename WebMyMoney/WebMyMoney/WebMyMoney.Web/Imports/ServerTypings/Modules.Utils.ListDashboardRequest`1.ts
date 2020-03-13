namespace WebMyMoney.Modules.Utils {
    export interface ListDashboardRequest<T> extends Serenity.ServiceResponse {
        Entities?: T[];
        Values?: any[];
        ListaTodasReceitasDoMes?: DespesaMesModel[];
        ListaProximosVencimentos?: DespesaMesModel[];
        ListaCartaoCredito?: CartaoCreditoModel[];
        SaldoAtual?: number;
        TotalReceitas?: number;
        TotalDespesas?: number;
        MesVigente?: number;
        Skip?: number;
        Take?: number;
    }
}

