namespace WebMyMoney.Default {
    export namespace CadGrupoFamiliarService {
        export const baseUrl = 'Default/CadGrupoFamiliar';

        export declare function Create(request: Serenity.SaveRequest<CadGrupoFamiliarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadGrupoFamiliarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadGrupoFamiliarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadGrupoFamiliarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CriarGrupo(request: Serenity.SaveRequest<CadGrupoFamiliarRow>, onSuccess?: (response: CadGrupoFamiliarRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function AlterarGrupo(request: CadGrupoFamiliarRow, onSuccess?: (response: Modules.Default.CadUsuario.UsuarioRequest) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadGrupoFamiliar/Create",
            Update = "Default/CadGrupoFamiliar/Update",
            Delete = "Default/CadGrupoFamiliar/Delete",
            Retrieve = "Default/CadGrupoFamiliar/Retrieve",
            List = "Default/CadGrupoFamiliar/List",
            CriarGrupo = "Default/CadGrupoFamiliar/CriarGrupo",
            AlterarGrupo = "Default/CadGrupoFamiliar/AlterarGrupo"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'CriarGrupo', 
            'AlterarGrupo'
        ].forEach(x => {
            (<any>CadGrupoFamiliarService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

