
namespace WebMyMoney.Default {
    export interface CadGrupoFamiliarRow {
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

    export namespace CadGrupoFamiliarRow {
        export const idProperty = 'CadGrupoFamiliarId';
        export const nameProperty = 'CodigoAcesso';
        export const localTextPrefix = 'Default.CadGrupoFamiliar';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadGrupoFamiliarId;
            export declare const CadAssinanteId;
            export declare const Ativo;
            export declare const DataCriacao;
            export declare const CodigoAcesso;
            export declare const QdteUsuarios;
            export declare const CadAssinanteDataCriacao;
            export declare const CadAssinanteUsuarioAdminId;
            export declare const CadAssinanteUsarioAdminNome;
            export declare const CadAssinanteUsuarioAdminEmail;
            export declare const CadAssinanteQdteGrupoFamiliar;
            export declare const CadAssinanteAtivo;
        }

        [
            'CadGrupoFamiliarId',
            'CadAssinanteId',
            'Ativo',
            'DataCriacao',
            'CodigoAcesso',
            'QdteUsuarios',
            'CadAssinanteDataCriacao',
            'CadAssinanteUsuarioAdminId',
            'CadAssinanteUsarioAdminNome',
            'CadAssinanteUsuarioAdminEmail',
            'CadAssinanteQdteGrupoFamiliar',
            'CadAssinanteAtivo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}