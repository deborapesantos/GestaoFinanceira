namespace WebMyMoney.Modules.Default.CadReceita {
    export interface CadReceitaViewModel<T> extends Serenity.ListResponse<T> {
        Lista?: T[];
        TotalPendente?: number;
        TotalConcluido?: number;
    }
}

