/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace WebMyMoney.Administration {
}
declare namespace WebMyMoney.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace WebMyMoney.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace WebMyMoney.Administration {
}
declare namespace WebMyMoney.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace WebMyMoney.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace WebMyMoney.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace WebMyMoney.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace WebMyMoney.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace WebMyMoney.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace WebMyMoney.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace WebMyMoney.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace WebMyMoney.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace WebMyMoney.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace WebMyMoney.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace WebMyMoney.Administration {
}
declare namespace WebMyMoney.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace WebMyMoney.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace WebMyMoney.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace WebMyMoney.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace WebMyMoney.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace WebMyMoney.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace WebMyMoney.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace WebMyMoney.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace WebMyMoney.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace WebMyMoney.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace WebMyMoney.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace WebMyMoney.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace WebMyMoney.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace WebMyMoney.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace WebMyMoney.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace WebMyMoney.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace WebMyMoney.Default {
    class CadAssinanteForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadAssinanteForm {
        DataCriacao: Serenity.DateEditor;
        UsuarioAdminId: Serenity.IntegerEditor;
        UsarioAdminNome: Serenity.StringEditor;
        UsuarioAdminEmail: Serenity.StringEditor;
        QdteGrupoFamiliar: Serenity.IntegerEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadAssinanteRow {
        CadAssinanteId?: number;
        DataCriacao?: string;
        UsuarioAdminId?: number;
        UsarioAdminNome?: string;
        UsuarioAdminEmail?: string;
        QdteGrupoFamiliar?: number;
        Ativo?: boolean;
    }
    namespace CadAssinanteRow {
        const idProperty = "CadAssinanteId";
        const nameProperty = "UsarioAdminNome";
        const localTextPrefix = "Default.CadAssinante";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadAssinanteId: any;
            const DataCriacao: any;
            const UsuarioAdminId: any;
            const UsarioAdminNome: any;
            const UsuarioAdminEmail: any;
            const QdteGrupoFamiliar: any;
            const Ativo: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadAssinanteService {
        const baseUrl = "Default/CadAssinante";
        function Create(request: Serenity.SaveRequest<CadAssinanteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadAssinanteRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadAssinanteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadAssinanteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadCartaoCreditoForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoCartaoCredito: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        DataPagamentoFatura: Serenity.DateEditor;
        DiaPagarFatura: Serenity.IntegerEditor;
        DataFechamentoFatura: Serenity.DateEditor;
        DiaFecharFatura: Serenity.IntegerEditor;
        ValorLimiteTotal: Serenity.DecimalEditor;
        ValorLimiteAtual: Serenity.DecimalEditor;
        ValorParcialFaturaAtual: Serenity.DecimalEditor;
        Saldo: Serenity.DecimalEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadCartaoCreditoRow {
        CadCartaoCreditoId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoCartaoCredito?: number;
        Titulo?: string;
        Descricao?: string;
        DataPagamentoFatura?: string;
        DiaPagarFatura?: number;
        DataFechamentoFatura?: string;
        DiaFecharFatura?: number;
        ValorLimiteTotal?: number;
        ValorLimiteAtual?: number;
        ValorParcialFaturaAtual?: number;
        Saldo?: number;
        Ativo?: boolean;
        CadContaCadGrupoFamiliarId?: number;
        CadContaCadUsuarioId?: number;
        CadContaCodigoTabTipoConta?: number;
        CadContaValorInicial?: number;
        CadContaSaldoAtual?: number;
        CadContaTitulo?: string;
        CadContaAtivo?: boolean;
        CadContaDataInicial?: string;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        CadUsuarioCadGrupoFamiliarId?: number;
        CadUsuarioUserId?: number;
        CadUsuarioNome?: string;
        CadUsuarioTelefone?: string;
        CadUsuarioDataCriacao?: string;
        CadUsuarioEmail?: string;
        CadUsuarioAtivo?: boolean;
        CodigoTabTipoCartaoCreditoDescricao?: string;
        CodigoTabTipoCartaoCreditoIcone?: string;
    }
    namespace CadCartaoCreditoRow {
        const idProperty = "CadCartaoCreditoId";
        const nameProperty = "Titulo";
        const localTextPrefix = "Default.CadCartaoCredito";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadCartaoCreditoId: any;
            const CadContaId: any;
            const CadGrupoFamiliarId: any;
            const CadUsuarioId: any;
            const CodigoTabTipoCartaoCredito: any;
            const Titulo: any;
            const Descricao: any;
            const DataPagamentoFatura: any;
            const DiaPagarFatura: any;
            const DataFechamentoFatura: any;
            const DiaFecharFatura: any;
            const ValorLimiteTotal: any;
            const ValorLimiteAtual: any;
            const ValorParcialFaturaAtual: any;
            const Saldo: any;
            const Ativo: any;
            const CadContaCadGrupoFamiliarId: any;
            const CadContaCadUsuarioId: any;
            const CadContaCodigoTabTipoConta: any;
            const CadContaValorInicial: any;
            const CadContaSaldoAtual: any;
            const CadContaTitulo: any;
            const CadContaAtivo: any;
            const CadContaDataInicial: any;
            const CadGrupoFamiliarCadAssinanteId: any;
            const CadGrupoFamiliarAtivo: any;
            const CadGrupoFamiliarDataCriacao: any;
            const CadGrupoFamiliarCodigoAcesso: any;
            const CadGrupoFamiliarQdteUsuarios: any;
            const CadUsuarioCadGrupoFamiliarId: any;
            const CadUsuarioUserId: any;
            const CadUsuarioNome: any;
            const CadUsuarioTelefone: any;
            const CadUsuarioDataCriacao: any;
            const CadUsuarioEmail: any;
            const CadUsuarioAtivo: any;
            const CodigoTabTipoCartaoCreditoDescricao: any;
            const CodigoTabTipoCartaoCreditoIcone: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadCartaoCreditoService {
        const baseUrl = "Default/CadCartaoCredito";
        function Create(request: Serenity.SaveRequest<CadCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadContaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadContaForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoConta: Serenity.IntegerEditor;
        ValorInicial: Serenity.DecimalEditor;
        SaldoAtual: Serenity.DecimalEditor;
        Titulo: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
        DataInicial: Serenity.DateEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadContaRow {
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoConta?: number;
        ValorInicial?: number;
        SaldoAtual?: number;
        Titulo?: string;
        Ativo?: boolean;
        DataInicial?: string;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        CadUsuarioCadGrupoFamiliarId?: number;
        CadUsuarioUserId?: number;
        CadUsuarioNome?: string;
        CadUsuarioTelefone?: string;
        CadUsuarioDataCriacao?: string;
        CadUsuarioEmail?: string;
        CadUsuarioAtivo?: boolean;
        CodigoTabTipoContaDescricao?: string;
    }
    namespace CadContaRow {
        const idProperty = "CadContaId";
        const nameProperty = "Titulo";
        const localTextPrefix = "Default.CadConta";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadContaId: any;
            const CadGrupoFamiliarId: any;
            const CadUsuarioId: any;
            const CodigoTabTipoConta: any;
            const ValorInicial: any;
            const SaldoAtual: any;
            const Titulo: any;
            const Ativo: any;
            const DataInicial: any;
            const CadGrupoFamiliarCadAssinanteId: any;
            const CadGrupoFamiliarAtivo: any;
            const CadGrupoFamiliarDataCriacao: any;
            const CadGrupoFamiliarCodigoAcesso: any;
            const CadGrupoFamiliarQdteUsuarios: any;
            const CadUsuarioCadGrupoFamiliarId: any;
            const CadUsuarioUserId: any;
            const CadUsuarioNome: any;
            const CadUsuarioTelefone: any;
            const CadUsuarioDataCriacao: any;
            const CadUsuarioEmail: any;
            const CadUsuarioAtivo: any;
            const CodigoTabTipoContaDescricao: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadContaService {
        const baseUrl = "Default/CadConta";
        function Create(request: Serenity.SaveRequest<CadContaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadContaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadDespesaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadDespesaForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoDespesa: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        DataPagamento: Serenity.DateEditor;
        DataCriacao: Serenity.DateEditor;
        IsFixo: Serenity.BooleanEditor;
        DataVencimento: Serenity.DateEditor;
        ValorTotal: Serenity.DecimalEditor;
        MultasJuros: Serenity.DecimalEditor;
        DataFixaVencimento: Serenity.IntegerEditor;
        Pago: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
        Descontos: Serenity.DecimalEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadDespesaRow {
        CadDespesaId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoDespesa?: number;
        Titulo?: string;
        DataPagamento?: string;
        DataCriacao?: string;
        IsFixo?: boolean;
        DataVencimento?: string;
        ValorTotal?: number;
        MultasJuros?: number;
        DataFixaVencimento?: number;
        Pago?: boolean;
        Ativo?: boolean;
        Descontos?: number;
        CadContaCadGrupoFamiliarId?: number;
        CadContaCadUsuarioId?: number;
        CadContaCodigoTabTipoConta?: number;
        CadContaValorInicial?: number;
        CadContaSaldoAtual?: number;
        CadContaTitulo?: string;
        CadContaAtivo?: boolean;
        CadContaDataInicial?: string;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        CadUsuarioCadGrupoFamiliarId?: number;
        CadUsuarioUserId?: number;
        CadUsuarioNome?: string;
        CadUsuarioTelefone?: string;
        CadUsuarioDataCriacao?: string;
        CadUsuarioEmail?: string;
        CadUsuarioAtivo?: boolean;
        CodigoTabTipoDespesaDescricao?: string;
        CodigoTabTipoDespesaIcone?: string;
    }
    namespace CadDespesaRow {
        const idProperty = "CadDespesaId";
        const nameProperty = "Titulo";
        const localTextPrefix = "Default.CadDespesa";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadDespesaId: any;
            const CadContaId: any;
            const CadGrupoFamiliarId: any;
            const CadUsuarioId: any;
            const CodigoTabTipoDespesa: any;
            const Titulo: any;
            const DataPagamento: any;
            const DataCriacao: any;
            const IsFixo: any;
            const DataVencimento: any;
            const ValorTotal: any;
            const MultasJuros: any;
            const DataFixaVencimento: any;
            const Pago: any;
            const Ativo: any;
            const Descontos: any;
            const CadContaCadGrupoFamiliarId: any;
            const CadContaCadUsuarioId: any;
            const CadContaCodigoTabTipoConta: any;
            const CadContaValorInicial: any;
            const CadContaSaldoAtual: any;
            const CadContaTitulo: any;
            const CadContaAtivo: any;
            const CadContaDataInicial: any;
            const CadGrupoFamiliarCadAssinanteId: any;
            const CadGrupoFamiliarAtivo: any;
            const CadGrupoFamiliarDataCriacao: any;
            const CadGrupoFamiliarCodigoAcesso: any;
            const CadGrupoFamiliarQdteUsuarios: any;
            const CadUsuarioCadGrupoFamiliarId: any;
            const CadUsuarioUserId: any;
            const CadUsuarioNome: any;
            const CadUsuarioTelefone: any;
            const CadUsuarioDataCriacao: any;
            const CadUsuarioEmail: any;
            const CadUsuarioAtivo: any;
            const CodigoTabTipoDespesaDescricao: any;
            const CodigoTabTipoDespesaIcone: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadDespesaService {
        const baseUrl = "Default/CadDespesa";
        function Create(request: Serenity.SaveRequest<CadDespesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadDespesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadGrupoFamiliarForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadGrupoFamiliarForm {
        CadAssinanteId: Serenity.IntegerEditor;
        Ativo: Serenity.BooleanEditor;
        DataCriacao: Serenity.DateEditor;
        CodigoAcesso: Serenity.StringEditor;
        QdteUsuarios: Serenity.IntegerEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadGrupoFamiliarRow {
        CadGrupoFamiliarId?: number;
        CadAssinanteId?: number;
        Ativo?: boolean;
        DataCriacao?: string;
        CodigoAcesso?: string;
        QdteUsuarios?: number;
        CadAssinanteDataCriacao?: string;
        CadAssinanteUsuarioAdminId?: number;
        CadAssinanteUsarioAdminNome?: string;
        CadAssinanteUsuarioAdminEmail?: string;
        CadAssinanteQdteGrupoFamiliar?: number;
        CadAssinanteAtivo?: boolean;
    }
    namespace CadGrupoFamiliarRow {
        const idProperty = "CadGrupoFamiliarId";
        const nameProperty = "CodigoAcesso";
        const localTextPrefix = "Default.CadGrupoFamiliar";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadGrupoFamiliarId: any;
            const CadAssinanteId: any;
            const Ativo: any;
            const DataCriacao: any;
            const CodigoAcesso: any;
            const QdteUsuarios: any;
            const CadAssinanteDataCriacao: any;
            const CadAssinanteUsuarioAdminId: any;
            const CadAssinanteUsarioAdminNome: any;
            const CadAssinanteUsuarioAdminEmail: any;
            const CadAssinanteQdteGrupoFamiliar: any;
            const CadAssinanteAtivo: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadGrupoFamiliarService {
        const baseUrl = "Default/CadGrupoFamiliar";
        function Create(request: Serenity.SaveRequest<CadGrupoFamiliarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadGrupoFamiliarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadGrupoFamiliarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadGrupoFamiliarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadObjetivoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadObjetivoForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoObjetivo: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        ValorFinal: Serenity.DecimalEditor;
        ValorInicial: Serenity.DecimalEditor;
        ValorAtual: Serenity.DecimalEditor;
        DataFinal: Serenity.DateEditor;
        DataInicial: Serenity.DateEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadObjetivoRow {
        CadObjetivoId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoObjetivo?: number;
        Titulo?: string;
        Descricao?: string;
        ValorFinal?: number;
        ValorInicial?: number;
        ValorAtual?: number;
        DataFinal?: string;
        DataInicial?: string;
        Ativo?: boolean;
        CadContaCadGrupoFamiliarId?: number;
        CadContaCadUsuarioId?: number;
        CadContaCodigoTabTipoConta?: number;
        CadContaValorInicial?: number;
        CadContaSaldoAtual?: number;
        CadContaTitulo?: string;
        CadContaAtivo?: boolean;
        CadContaDataInicial?: string;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        CadUsuarioCadGrupoFamiliarId?: number;
        CadUsuarioUserId?: number;
        CadUsuarioNome?: string;
        CadUsuarioTelefone?: string;
        CadUsuarioDataCriacao?: string;
        CadUsuarioEmail?: string;
        CadUsuarioAtivo?: boolean;
        CodigoTabTipoObjetivoDescricao?: string;
    }
    namespace CadObjetivoRow {
        const idProperty = "CadObjetivoId";
        const nameProperty = "Titulo";
        const localTextPrefix = "Default.CadObjetivo";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadObjetivoId: any;
            const CadContaId: any;
            const CadGrupoFamiliarId: any;
            const CadUsuarioId: any;
            const CodigoTabTipoObjetivo: any;
            const Titulo: any;
            const Descricao: any;
            const ValorFinal: any;
            const ValorInicial: any;
            const ValorAtual: any;
            const DataFinal: any;
            const DataInicial: any;
            const Ativo: any;
            const CadContaCadGrupoFamiliarId: any;
            const CadContaCadUsuarioId: any;
            const CadContaCodigoTabTipoConta: any;
            const CadContaValorInicial: any;
            const CadContaSaldoAtual: any;
            const CadContaTitulo: any;
            const CadContaAtivo: any;
            const CadContaDataInicial: any;
            const CadGrupoFamiliarCadAssinanteId: any;
            const CadGrupoFamiliarAtivo: any;
            const CadGrupoFamiliarDataCriacao: any;
            const CadGrupoFamiliarCodigoAcesso: any;
            const CadGrupoFamiliarQdteUsuarios: any;
            const CadUsuarioCadGrupoFamiliarId: any;
            const CadUsuarioUserId: any;
            const CadUsuarioNome: any;
            const CadUsuarioTelefone: any;
            const CadUsuarioDataCriacao: any;
            const CadUsuarioEmail: any;
            const CadUsuarioAtivo: any;
            const CodigoTabTipoObjetivoDescricao: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadObjetivoService {
        const baseUrl = "Default/CadObjetivo";
        function Create(request: Serenity.SaveRequest<CadObjetivoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadObjetivoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadObjetivoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadObjetivoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadReceitaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadReceitaForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadContaId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoReceita: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        DataRecebimento: Serenity.DateEditor;
        DataCriacao: Serenity.DateEditor;
        IsFixo: Serenity.BooleanEditor;
        DataFixaRecebimento: Serenity.IntegerEditor;
        Valor: Serenity.DecimalEditor;
        Recebido: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadReceitaRow {
        CadReceitaId?: number;
        CadGrupoFamiliarId?: number;
        CadContaId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoReceita?: number;
        Titulo?: string;
        Descricao?: string;
        DataRecebimento?: string;
        DataCriacao?: string;
        IsFixo?: boolean;
        DataFixaRecebimento?: number;
        Valor?: number;
        Recebido?: boolean;
        Ativo?: boolean;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        CadContaCadGrupoFamiliarId?: number;
        CadContaCadUsuarioId?: number;
        CadContaCodigoTabTipoConta?: number;
        CadContaValorInicial?: number;
        CadContaSaldoAtual?: number;
        CadContaTitulo?: string;
        CadContaAtivo?: boolean;
        CadContaDataInicial?: string;
        CadUsuarioCadGrupoFamiliarId?: number;
        CadUsuarioUserId?: number;
        CadUsuarioNome?: string;
        CadUsuarioTelefone?: string;
        CadUsuarioDataCriacao?: string;
        CadUsuarioEmail?: string;
        CadUsuarioAtivo?: boolean;
        CodigoTabTipoReceitaDescricao?: string;
    }
    namespace CadReceitaRow {
        const idProperty = "CadReceitaId";
        const nameProperty = "Titulo";
        const localTextPrefix = "Default.CadReceita";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadReceitaId: any;
            const CadGrupoFamiliarId: any;
            const CadContaId: any;
            const CadUsuarioId: any;
            const CodigoTabTipoReceita: any;
            const Titulo: any;
            const Descricao: any;
            const DataRecebimento: any;
            const DataCriacao: any;
            const IsFixo: any;
            const DataFixaRecebimento: any;
            const Valor: any;
            const Recebido: any;
            const Ativo: any;
            const CadGrupoFamiliarCadAssinanteId: any;
            const CadGrupoFamiliarAtivo: any;
            const CadGrupoFamiliarDataCriacao: any;
            const CadGrupoFamiliarCodigoAcesso: any;
            const CadGrupoFamiliarQdteUsuarios: any;
            const CadContaCadGrupoFamiliarId: any;
            const CadContaCadUsuarioId: any;
            const CadContaCodigoTabTipoConta: any;
            const CadContaValorInicial: any;
            const CadContaSaldoAtual: any;
            const CadContaTitulo: any;
            const CadContaAtivo: any;
            const CadContaDataInicial: any;
            const CadUsuarioCadGrupoFamiliarId: any;
            const CadUsuarioUserId: any;
            const CadUsuarioNome: any;
            const CadUsuarioTelefone: any;
            const CadUsuarioDataCriacao: any;
            const CadUsuarioEmail: any;
            const CadUsuarioAtivo: any;
            const CodigoTabTipoReceitaDescricao: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadReceitaService {
        const baseUrl = "Default/CadReceita";
        function Create(request: Serenity.SaveRequest<CadReceitaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadReceitaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class CadUsuarioForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CadUsuarioForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        Nome: Serenity.StringEditor;
        Telefone: Serenity.StringEditor;
        DataCriacao: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface CadUsuarioRow {
        CadUsuarioId?: number;
        CadGrupoFamiliarId?: number;
        UserId?: number;
        Nome?: string;
        Telefone?: string;
        DataCriacao?: string;
        Email?: string;
        Ativo?: boolean;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
        UserUsuarioId?: number;
    }
    namespace CadUsuarioRow {
        const idProperty = "CadUsuarioId";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.CadUsuario";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CadUsuarioId: any;
            const CadGrupoFamiliarId: any;
            const UserId: any;
            const Nome: any;
            const Telefone: any;
            const DataCriacao: any;
            const Email: any;
            const Ativo: any;
            const CadGrupoFamiliarCadAssinanteId: any;
            const CadGrupoFamiliarAtivo: any;
            const CadGrupoFamiliarDataCriacao: any;
            const CadGrupoFamiliarCodigoAcesso: any;
            const CadGrupoFamiliarQdteUsuarios: any;
            const UserUsername: any;
            const UserDisplayName: any;
            const UserEmail: any;
            const UserSource: any;
            const UserPasswordHash: any;
            const UserPasswordSalt: any;
            const UserLastDirectoryUpdate: any;
            const UserUserImage: any;
            const UserInsertDate: any;
            const UserInsertUserId: any;
            const UserUpdateDate: any;
            const UserUpdateUserId: any;
            const UserIsActive: any;
            const UserUsuarioId: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace CadUsuarioService {
        const baseUrl = "Default/CadUsuario";
        function Create(request: Serenity.SaveRequest<CadUsuarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CadUsuarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CadUsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CadUsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    interface RolePermissionsRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
    }
    namespace RolePermissionsRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Default.RolePermissions";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const RolePermissionId: any;
            const RoleId: any;
            const PermissionKey: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    interface RolesRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RolesRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Default.Roles";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const RoleId: any;
            const RoleName: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TabTipoCartaoCreditoForm {
        Descricao: Serenity.StringEditor;
        Icone: Serenity.StringEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface TabTipoCartaoCreditoRow {
        CodigoTabTipoCartaoCredito?: number;
        Descricao?: string;
        Icone?: string;
    }
    namespace TabTipoCartaoCreditoRow {
        const idProperty = "CodigoTabTipoCartaoCredito";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.TabTipoCartaoCredito";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CodigoTabTipoCartaoCredito: any;
            const Descricao: any;
            const Icone: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace TabTipoCartaoCreditoService {
        const baseUrl = "Default/TabTipoCartaoCredito";
        function Create(request: Serenity.SaveRequest<TabTipoCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TabTipoCartaoCreditoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoCartaoCreditoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoContaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TabTipoContaForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface TabTipoContaRow {
        CodigoTabTipoConta?: number;
        Descricao?: string;
    }
    namespace TabTipoContaRow {
        const idProperty = "CodigoTabTipoConta";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.TabTipoConta";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CodigoTabTipoConta: any;
            const Descricao: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace TabTipoContaService {
        const baseUrl = "Default/TabTipoConta";
        function Create(request: Serenity.SaveRequest<TabTipoContaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TabTipoContaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoContaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoDespesaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TabTipoDespesaForm {
        Descricao: Serenity.StringEditor;
        Icone: Serenity.StringEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface TabTipoDespesaRow {
        CodigoTabTipoDespesa?: number;
        Descricao?: string;
        Icone?: string;
    }
    namespace TabTipoDespesaRow {
        const idProperty = "CodigoTabTipoDespesa";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.TabTipoDespesa";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CodigoTabTipoDespesa: any;
            const Descricao: any;
            const Icone: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace TabTipoDespesaService {
        const baseUrl = "Default/TabTipoDespesa";
        function Create(request: Serenity.SaveRequest<TabTipoDespesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TabTipoDespesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoDespesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoObjetivoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TabTipoObjetivoForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface TabTipoObjetivoRow {
        CodigoTabTipoObjetivo?: number;
        Descricao?: string;
    }
    namespace TabTipoObjetivoRow {
        const idProperty = "CodigoTabTipoObjetivo";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.TabTipoObjetivo";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CodigoTabTipoObjetivo: any;
            const Descricao: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace TabTipoObjetivoService {
        const baseUrl = "Default/TabTipoObjetivo";
        function Create(request: Serenity.SaveRequest<TabTipoObjetivoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TabTipoObjetivoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoObjetivoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoObjetivoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoReceitaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TabTipoReceitaForm {
        Descricao: Serenity.StringEditor;
    }
}
declare namespace WebMyMoney.Default {
    interface TabTipoReceitaRow {
        CodigoTabTipoReceita?: number;
        Descricao?: string;
    }
    namespace TabTipoReceitaRow {
        const idProperty = "CodigoTabTipoReceita";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.TabTipoReceita";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const CodigoTabTipoReceita: any;
            const Descricao: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    namespace TabTipoReceitaService {
        const baseUrl = "Default/TabTipoReceita";
        function Create(request: Serenity.SaveRequest<TabTipoReceitaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TabTipoReceitaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TabTipoReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TabTipoReceitaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace WebMyMoney.Default {
    interface UserPermissionsRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
    }
    namespace UserPermissionsRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Default.UserPermissions";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const UserPermissionId: any;
            const UserId: any;
            const PermissionKey: any;
            const Granted: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    interface UserPreferencesRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferencesRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "PreferenceType";
        const localTextPrefix = "Default.UserPreferences";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const UserPreferenceId: any;
            const UserId: any;
            const PreferenceType: any;
            const Name: any;
            const Value: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    interface UserRolesRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
    }
    namespace UserRolesRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Default.UserRoles";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const UserRoleId: any;
            const UserId: any;
            const RoleId: any;
        }
    }
}
declare namespace WebMyMoney.Default {
    interface UsersRow {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        Email?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        LastDirectoryUpdate?: string;
        UserImage?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        UsuarioId?: number;
    }
    namespace UsersRow {
        const idProperty = "UserId";
        const nameProperty = "Username";
        const localTextPrefix = "Default.Users";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const UserId: any;
            const Username: any;
            const DisplayName: any;
            const Email: any;
            const Source: any;
            const PasswordHash: any;
            const PasswordSalt: any;
            const LastDirectoryUpdate: any;
            const UserImage: any;
            const InsertDate: any;
            const InsertUserId: any;
            const UpdateDate: any;
            const UpdateUserId: any;
            const IsActive: any;
            const UsuarioId: any;
        }
    }
}
declare namespace WebMyMoney {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace WebMyMoney {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace WebMyMoney {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace WebMyMoney {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace WebMyMoney.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace WebMyMoney.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace WebMyMoney.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace WebMyMoney.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace WebMyMoney.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace WebMyMoney.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace WebMyMoney {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace WebMyMoney.Texts {
}
declare namespace WebMyMoney.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace WebMyMoney.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace WebMyMoney.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace WebMyMoney.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace WebMyMoney.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace WebMyMoney.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace WebMyMoney.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace WebMyMoney.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace WebMyMoney.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace WebMyMoney.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace WebMyMoney.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace WebMyMoney.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace WebMyMoney.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace WebMyMoney.LanguageList {
    function getValue(): string[][];
}
declare namespace WebMyMoney.ScriptInitialization {
}
declare namespace WebMyMoney {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace WebMyMoney.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace WebMyMoney.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace WebMyMoney.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace WebMyMoney.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace WebMyMoney.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace WebMyMoney.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace WebMyMoney {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace WebMyMoney.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace WebMyMoney.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace WebMyMoney.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace WebMyMoney.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace WebMyMoney.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace WebMyMoney.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace WebMyMoney.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace WebMyMoney.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace WebMyMoney.Default {
    class CadAssinanteDialog extends Serenity.EntityDialog<CadAssinanteRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadAssinanteForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadAssinanteGrid extends Serenity.EntityGrid<CadAssinanteRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadAssinanteDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadCartaoCreditoDialog extends Serenity.EntityDialog<CadCartaoCreditoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadCartaoCreditoForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadCartaoCreditoGrid extends Serenity.EntityGrid<CadCartaoCreditoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadCartaoCreditoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadContaDialog extends Serenity.EntityDialog<CadContaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadContaForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadContaGrid extends Serenity.EntityGrid<CadContaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadContaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadDespesaDialog extends Serenity.EntityDialog<CadDespesaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadDespesaForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadDespesaGrid extends Serenity.EntityGrid<CadDespesaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadDespesaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadGrupoFamiliarDialog extends Serenity.EntityDialog<CadGrupoFamiliarRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadGrupoFamiliarForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadGrupoFamiliarGrid extends Serenity.EntityGrid<CadGrupoFamiliarRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadGrupoFamiliarDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadObjetivoDialog extends Serenity.EntityDialog<CadObjetivoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadObjetivoForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadObjetivoGrid extends Serenity.EntityGrid<CadObjetivoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadObjetivoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadReceitaDialog extends Serenity.EntityDialog<CadReceitaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadReceitaForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadReceitaGrid extends Serenity.EntityGrid<CadReceitaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadReceitaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class CadUsuarioDialog extends Serenity.EntityDialog<CadUsuarioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CadUsuarioForm;
    }
}
declare namespace WebMyMoney.Default {
    class CadUsuarioGrid extends Serenity.EntityGrid<CadUsuarioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CadUsuarioDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoCartaoCreditoDialog extends Serenity.EntityDialog<TabTipoCartaoCreditoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TabTipoCartaoCreditoForm;
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoCartaoCreditoGrid extends Serenity.EntityGrid<TabTipoCartaoCreditoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TabTipoCartaoCreditoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoContaDialog extends Serenity.EntityDialog<TabTipoContaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TabTipoContaForm;
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoContaGrid extends Serenity.EntityGrid<TabTipoContaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TabTipoContaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoDespesaDialog extends Serenity.EntityDialog<TabTipoDespesaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TabTipoDespesaForm;
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoDespesaGrid extends Serenity.EntityGrid<TabTipoDespesaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TabTipoDespesaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoObjetivoDialog extends Serenity.EntityDialog<TabTipoObjetivoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TabTipoObjetivoForm;
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoObjetivoGrid extends Serenity.EntityGrid<TabTipoObjetivoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TabTipoObjetivoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoReceitaDialog extends Serenity.EntityDialog<TabTipoReceitaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TabTipoReceitaForm;
    }
}
declare namespace WebMyMoney.Default {
    class TabTipoReceitaGrid extends Serenity.EntityGrid<TabTipoReceitaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TabTipoReceitaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace WebMyMoney.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
