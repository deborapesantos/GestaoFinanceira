namespace WebMyMoney.Default {
    export interface CadAssinanteRow {
        CadAssinanteId?: number;
        DataCriacao?: string;
        UsuarioAdminId?: number;
        UsarioAdminNome?: string;
        UsuarioAdminEmail?: string;
        QdteGrupoFamiliar?: number;
        Ativo?: boolean;
        Telefone?: string;
        Username?: string;
        Senha?: string;
    }

    export namespace CadAssinanteRow {
        export const idProperty = 'CadAssinanteId';
        export const nameProperty = 'UsarioAdminNome';
        export const localTextPrefix = 'Default.CadAssinante';
        export const deletePermission = 'Usuario:General';
        export const insertPermission = 'Usuario:General';
        export const readPermission = 'Usuario:General';
        export const updatePermission = 'Usuario:General';

        export declare const enum Fields {
            CadAssinanteId = "CadAssinanteId",
            DataCriacao = "DataCriacao",
            UsuarioAdminId = "UsuarioAdminId",
            UsarioAdminNome = "UsarioAdminNome",
            UsuarioAdminEmail = "UsuarioAdminEmail",
            QdteGrupoFamiliar = "QdteGrupoFamiliar",
            Ativo = "Ativo",
            Telefone = "Telefone",
            Username = "Username",
            Senha = "Senha"
        }
    }
}

