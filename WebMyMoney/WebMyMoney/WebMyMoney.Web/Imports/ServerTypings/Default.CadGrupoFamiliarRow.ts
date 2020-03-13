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
        export const nameProperty = 'CadAssinanteUsarioAdminNome';
        export const localTextPrefix = 'Default.CadGrupoFamiliar';
        export const lookupKey = 'Default.CadGrupoFamiliar';

        export function getLookup(): Q.Lookup<CadGrupoFamiliarRow> {
            return Q.getLookup<CadGrupoFamiliarRow>('Default.CadGrupoFamiliar');
        }
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            CadAssinanteId = "CadAssinanteId",
            Ativo = "Ativo",
            DataCriacao = "DataCriacao",
            CodigoAcesso = "CodigoAcesso",
            QdteUsuarios = "QdteUsuarios",
            CadAssinanteDataCriacao = "CadAssinanteDataCriacao",
            CadAssinanteUsuarioAdminId = "CadAssinanteUsuarioAdminId",
            CadAssinanteUsarioAdminNome = "CadAssinanteUsarioAdminNome",
            CadAssinanteUsuarioAdminEmail = "CadAssinanteUsuarioAdminEmail",
            CadAssinanteQdteGrupoFamiliar = "CadAssinanteQdteGrupoFamiliar",
            CadAssinanteAtivo = "CadAssinanteAtivo"
        }
    }
}

