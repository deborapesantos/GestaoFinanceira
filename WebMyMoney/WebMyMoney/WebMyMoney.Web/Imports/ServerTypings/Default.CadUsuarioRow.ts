
namespace WebMyMoney.Default {
    export interface CadUsuarioRow {
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

    export namespace CadUsuarioRow {
        export const idProperty = 'CadUsuarioId';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.CadUsuario';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadUsuarioId;
            export declare const CadGrupoFamiliarId;
            export declare const UserId;
            export declare const Nome;
            export declare const Telefone;
            export declare const DataCriacao;
            export declare const Email;
            export declare const Ativo;
            export declare const CadGrupoFamiliarCadAssinanteId;
            export declare const CadGrupoFamiliarAtivo;
            export declare const CadGrupoFamiliarDataCriacao;
            export declare const CadGrupoFamiliarCodigoAcesso;
            export declare const CadGrupoFamiliarQdteUsuarios;
            export declare const UserUsername;
            export declare const UserDisplayName;
            export declare const UserEmail;
            export declare const UserSource;
            export declare const UserPasswordHash;
            export declare const UserPasswordSalt;
            export declare const UserLastDirectoryUpdate;
            export declare const UserUserImage;
            export declare const UserInsertDate;
            export declare const UserInsertUserId;
            export declare const UserUpdateDate;
            export declare const UserUpdateUserId;
            export declare const UserIsActive;
            export declare const UserUsuarioId;
        }

        [
            'CadUsuarioId',
            'CadGrupoFamiliarId',
            'UserId',
            'Nome',
            'Telefone',
            'DataCriacao',
            'Email',
            'Ativo',
            'CadGrupoFamiliarCadAssinanteId',
            'CadGrupoFamiliarAtivo',
            'CadGrupoFamiliarDataCriacao',
            'CadGrupoFamiliarCodigoAcesso',
            'CadGrupoFamiliarQdteUsuarios',
            'UserUsername',
            'UserDisplayName',
            'UserEmail',
            'UserSource',
            'UserPasswordHash',
            'UserPasswordSalt',
            'UserLastDirectoryUpdate',
            'UserUserImage',
            'UserInsertDate',
            'UserInsertUserId',
            'UserUpdateDate',
            'UserUpdateUserId',
            'UserIsActive',
            'UserUsuarioId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}