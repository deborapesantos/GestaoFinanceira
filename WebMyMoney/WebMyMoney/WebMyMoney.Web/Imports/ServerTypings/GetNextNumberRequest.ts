namespace WebMyMoney {
    export interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}

