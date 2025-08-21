namespace WebMyMoney.Default {
    export namespace CadUsuarioService {
        export const baseUrl = 'Default/CadUsuario';

        export declare function Create(request: Serenity.SaveRequest<CadUsuarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CadUsuarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadUsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadUsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetPerfil(request: CadUsuarioRow, onSuccess?: (response: Modules.Default.CadUsuario.UsuarioRequest) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CriarUsuarioByOtherUser(request: Modules.Default.CadUsuario.UsuarioRequest, onSuccess?: (response: CadUsuarioRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UsuarioIsAdmin(request: CadUsuarioRow, onSuccess?: (response: System.Boolean) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetUsuarioGerenciamento(request: Modules.Default.CadUsuario.TelaPermissaoUsuarioRequest, onSuccess?: (response: Modules.Default.CadUsuario.TelaPermissaoUsuarioRequest) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function AdicionarGrupoPermissao(request: Modules.Default.CadUsuario.PermissaoGrupo, onSuccess?: (response: Modules.Default.CadUsuario.TelaPermissaoUsuarioRequest) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function RemoverGrupoPermissao(request: Modules.Default.CadUsuario.PermissaoGrupo, onSuccess?: (response: Modules.Default.CadUsuario.TelaPermissaoUsuarioRequest) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListarUsuarios(request: Modules.Default.CadUsuario.PermissaoGrupo, onSuccess?: (response: System.Collections.Generic.List<CadUsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTabelasAuxiliares(request: CadUsuarioRow, onSuccess?: (response: Modules.Default.CadDespesa.TabelasAuxiliaresViewModel) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/CadUsuario/Create",
            Update = "Default/CadUsuario/Update",
            Delete = "Default/CadUsuario/Delete",
            Retrieve = "Default/CadUsuario/Retrieve",
            List = "Default/CadUsuario/List",
            GetPerfil = "Default/CadUsuario/GetPerfil",
            CriarUsuarioByOtherUser = "Default/CadUsuario/CriarUsuarioByOtherUser",
            UsuarioIsAdmin = "Default/CadUsuario/UsuarioIsAdmin",
            GetUsuarioGerenciamento = "Default/CadUsuario/GetUsuarioGerenciamento",
            AdicionarGrupoPermissao = "Default/CadUsuario/AdicionarGrupoPermissao",
            RemoverGrupoPermissao = "Default/CadUsuario/RemoverGrupoPermissao",
            ListarUsuarios = "Default/CadUsuario/ListarUsuarios",
            GetTabelasAuxiliares = "Default/CadUsuario/GetTabelasAuxiliares"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetPerfil', 
            'CriarUsuarioByOtherUser', 
            'UsuarioIsAdmin', 
            'GetUsuarioGerenciamento', 
            'AdicionarGrupoPermissao', 
            'RemoverGrupoPermissao', 
            'ListarUsuarios', 
            'GetTabelasAuxiliares'
        ].forEach(x => {
            (<any>CadUsuarioService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

