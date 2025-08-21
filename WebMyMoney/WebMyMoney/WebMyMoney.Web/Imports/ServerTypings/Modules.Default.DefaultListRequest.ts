namespace WebMyMoney.Modules.Default {
    export interface DefaultListRequest extends Serenity.ListRequest {
        mes?: number;
        Id?: number;
        tipo?: string;
    }
}

