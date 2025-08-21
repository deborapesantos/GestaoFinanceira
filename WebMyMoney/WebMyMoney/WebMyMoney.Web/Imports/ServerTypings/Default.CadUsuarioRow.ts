namespace WebMyMoney.Default {
    export interface CadUsuarioRow {
        CadUsuarioId?: number;
        CadGrupoFamiliarId?: number;
        UserId?: number;
        GrupoPessoalId?: number;
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

    export namespace CadUsuarioRow {
        export const idProperty = 'CadUsuarioId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.CadUsuario';
        export const lookupKey = 'Default.CadUsuario';

        export function getLookup(): Q.Lookup<CadUsuarioRow> {
            return Q.getLookup<CadUsuarioRow>('Default.CadUsuario');
        }
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadUsuarioId = "CadUsuarioId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            UserId = "UserId",
            GrupoPessoalId = "GrupoPessoalId",
            Nome = "Nome",
            Telefone = "Telefone",
            DataCriacao = "DataCriacao",
            Email = "Email",
            Ativo = "Ativo",
            CadGrupoFamiliarCadAssinanteId = "CadGrupoFamiliarCadAssinanteId",
            CadGrupoFamiliarAtivo = "CadGrupoFamiliarAtivo",
            CadGrupoFamiliarDataCriacao = "CadGrupoFamiliarDataCriacao",
            CadGrupoFamiliarCodigoAcesso = "CadGrupoFamiliarCodigoAcesso",
            CadGrupoFamiliarQdteUsuarios = "CadGrupoFamiliarQdteUsuarios",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive",
            UserUsuarioId = "UserUsuarioId"
        }
    }
}

