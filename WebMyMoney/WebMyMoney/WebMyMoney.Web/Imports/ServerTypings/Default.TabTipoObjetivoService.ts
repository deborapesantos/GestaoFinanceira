namespace WebMyMoney.Default {
    export namespace TabTipoObjetivoService {
        export const baseUrl = 'Default/TabTipoObjetivo';

        export declare function Create(request: Serenity.SaveRequest<TabTipoObjetivoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TabTipoObjetivoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoObjetivoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoObjetivoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/TabTipoObjetivo/Create",
            Update = "Default/TabTipoObjetivo/Update",
            Delete = "Default/TabTipoObjetivo/Delete",
            Retrieve = "Default/TabTipoObjetivo/Retrieve",
            List = "Default/TabTipoObjetivo/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TabTipoObjetivoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

