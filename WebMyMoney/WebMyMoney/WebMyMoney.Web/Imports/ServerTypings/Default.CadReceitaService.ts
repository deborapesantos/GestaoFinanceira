namespace WebMyMoney.Default {
    export namespace CadReceitaService {
        export const baseUrl = 'Default/CadReceita';

        export declare function Create(request: Serenity.SaveRequest<CadReceitaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadReceitaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListCadReceita(request: Modules.Default.DefaultListRequest, onSuccess?: (response: Modules.Utils.ListScreenViewModel<CadReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadReceita/Create",
            Update = "Default/CadReceita/Update",
            Delete = "Default/CadReceita/Delete",
            Retrieve = "Default/CadReceita/Retrieve",
            List = "Default/CadReceita/List",
            ListCadReceita = "Default/CadReceita/ListCadReceita"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListCadReceita'
        ].forEach(x => {
            (<any>CadReceitaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

