namespace WebMyMoney.Default {
    export namespace CadCartaoCreditoService {
        export const baseUrl = 'Default/CadCartaoCredito';

        export declare function Create(request: Serenity.SaveRequest<CadCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListarCartaoCreditoDepesas(request: Modules.Default.DefaultListRequest, onSuccess?: (response: Modules.Utils.CartaoCreditoModel) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadCartaoCredito/Create",
            Update = "Default/CadCartaoCredito/Update",
            Delete = "Default/CadCartaoCredito/Delete",
            Retrieve = "Default/CadCartaoCredito/Retrieve",
            List = "Default/CadCartaoCredito/List",
            ListarCartaoCreditoDepesas = "Default/CadCartaoCredito/ListarCartaoCreditoDepesas"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListarCartaoCreditoDepesas'
        ].forEach(x => {
            (<any>CadCartaoCreditoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

