namespace WebMyMoney.Default {
    export namespace CadFaturaCartaoCreditoService {
        export const baseUrl = 'Default/CadFaturaCartaoCredito';

        export declare function Create(request: Serenity.SaveRequest<CadFaturaCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadFaturaCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadFaturaCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadFaturaCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadFaturaCartaoCredito/Create",
            Update = "Default/CadFaturaCartaoCredito/Update",
            Delete = "Default/CadFaturaCartaoCredito/Delete",
            Retrieve = "Default/CadFaturaCartaoCredito/Retrieve",
            List = "Default/CadFaturaCartaoCredito/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CadFaturaCartaoCreditoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

