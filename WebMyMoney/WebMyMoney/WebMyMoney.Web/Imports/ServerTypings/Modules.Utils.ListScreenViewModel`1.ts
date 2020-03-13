namespace WebMyMoney.Modules.Utils {
    export interface ListScreenViewModel<T> extends Serenity.ListResponse<T> {
        Lista?: T[];
        TotalPendente?: number;
        TotalConcluido?: number;
    }
}

