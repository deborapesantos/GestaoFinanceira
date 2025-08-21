namespace WebMyMoney.Default {
    export namespace CadDespesaService {
        export const baseUrl = 'Default/CadDespesa';

        export declare function Create(request: Serenity.SaveRequest<CadDespesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadDespesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListCadDespesa(request: Modules.Default.DefaultListRequest, onSuccess?: (response: Modules.Utils.ListScreenViewModel<CadDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function PagarDespesa(request: Modules.Default.CadDespesa.CadDespesaRetrieveRequest, onSuccess?: (response: CadDespesaRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CriarDespesa(request: Modules.Default.CadDespesa.CadDespesaRetrieveRequest, onSuccess?: (response: CadDespesaRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTabelasAuxiliares(request: Modules.Default.CadDespesa.CadDespesaRetrieveRequest, onSuccess?: (response: Modules.Default.CadDespesa.TabelasAuxiliaresViewModel) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function EditarDespesa(request: Modules.Default.CadDespesa.CadDespesaRetrieveRequest, onSuccess?: (response: CadDespesaRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetById(request: CadDespesaRow, onSuccess?: (response: CadDespesaRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadDespesa/Create",
            Update = "Default/CadDespesa/Update",
            Delete = "Default/CadDespesa/Delete",
            Retrieve = "Default/CadDespesa/Retrieve",
            List = "Default/CadDespesa/List",
            ListCadDespesa = "Default/CadDespesa/ListCadDespesa",
            PagarDespesa = "Default/CadDespesa/PagarDespesa",
            CriarDespesa = "Default/CadDespesa/CriarDespesa",
            GetTabelasAuxiliares = "Default/CadDespesa/GetTabelasAuxiliares",
            EditarDespesa = "Default/CadDespesa/EditarDespesa",
            GetById = "Default/CadDespesa/GetById"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListCadDespesa', 
            'PagarDespesa', 
            'CriarDespesa', 
            'GetTabelasAuxiliares', 
            'EditarDespesa', 
            'GetById'
        ].forEach(x => {
            (<any>CadDespesaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

