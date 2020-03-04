
namespace WebMyMoney.Default {
    export interface CadAssinanteRow {
        CadAssinanteId?: number;
        DataCriacao?: string;
        UsuarioAdminId?: number;
        UsarioAdminNome?: string;
        UsuarioAdminEmail?: string;
        QdteGrupoFamiliar?: number;
        Ativo?: boolean;
    }

    export namespace CadAssinanteRow {
        export const idProperty = 'CadAssinanteId';
        export const nameProperty = 'UsarioAdminNome';
        export const localTextPrefix = 'Default.CadAssinante';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadAssinanteId;
            export declare const DataCriacao;
            export declare const UsuarioAdminId;
            export declare const UsarioAdminNome;
            export declare const UsuarioAdminEmail;
            export declare const QdteGrupoFamiliar;
            export declare const Ativo;
        }

        [
            'CadAssinanteId',
            'DataCriacao',
            'UsuarioAdminId',
            'UsarioAdminNome',
            'UsuarioAdminEmail',
            'QdteGrupoFamiliar',
            'Ativo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}