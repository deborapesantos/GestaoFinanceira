namespace WebMyMoney.Default {
    export namespace TabTipoCartaoCreditoService {
        export const baseUrl = 'Default/TabTipoCartaoCredito';

        export declare function Create(request: Serenity.SaveRequest<TabTipoCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TabTipoCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/TabTipoCartaoCredito/Create",
            Update = "Default/TabTipoCartaoCredito/Update",
            Delete = "Default/TabTipoCartaoCredito/Delete",
            Retrieve = "Default/TabTipoCartaoCredito/Retrieve",
            List = "Default/TabTipoCartaoCredito/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TabTipoCartaoCreditoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

