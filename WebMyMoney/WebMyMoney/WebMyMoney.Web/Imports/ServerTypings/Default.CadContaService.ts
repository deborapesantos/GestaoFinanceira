namespace WebMyMoney.Default {
    export namespace CadContaService {
        export const baseUrl = 'Default/CadConta';

        export declare function Create(request: Serenity.SaveRequest<CadContaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadContaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDashboard(request: Modules.Default.DefaultListRequest, onSuccess?: (response: Modules.Utils.ListDashboardRequest<CadContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CriarConta(request: Modules.Default.CadReceita.CadContaRetrieveRequest, onSuccess?: (response: CadContaRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTabelasAuxiliares(request: Modules.Default.CadDespesa.CadDespesaRetrieveRequest, onSuccess?: (response: Modules.Default.CadDespesa.TabelasAuxiliaresViewModel) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadConta/Create",
            Update = "Default/CadConta/Update",
            Delete = "Default/CadConta/Delete",
            Retrieve = "Default/CadConta/Retrieve",
            List = "Default/CadConta/List",
            GetDashboard = "Default/CadConta/GetDashboard",
            CriarConta = "Default/CadConta/CriarConta",
            GetTabelasAuxiliares = "Default/CadConta/GetTabelasAuxiliares"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetDashboard', 
            'CriarConta', 
            'GetTabelasAuxiliares'
        ].forEach(x => {
            (<any>CadContaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

