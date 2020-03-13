namespace WebMyMoney.Default {
    export interface CadContaRow {
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

    export namespace CadContaRow {
        export const idProperty = 'CadContaId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadConta';
        export const lookupKey = 'Default.CadConta';

        export function getLookup(): Q.Lookup<CadContaRow> {
            return Q.getLookup<CadContaRow>('Default.CadConta');
        }
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadContaId = "CadContaId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            CadUsuarioId = "CadUsuarioId",
            CodigoTabTipoConta = "CodigoTabTipoConta",
            ValorInicial = "ValorInicial",
            SaldoAtual = "SaldoAtual",
            Titulo = "Titulo",
            Ativo = "Ativo",
            DataInicial = "DataInicial",
            CadGrupoFamiliarCadAssinanteId = "CadGrupoFamiliarCadAssinanteId",
            CadGrupoFamiliarAtivo = "CadGrupoFamiliarAtivo",
            CadGrupoFamiliarDataCriacao = "CadGrupoFamiliarDataCriacao",
            CadGrupoFamiliarCodigoAcesso = "CadGrupoFamiliarCodigoAcesso",
            CadGrupoFamiliarQdteUsuarios = "CadGrupoFamiliarQdteUsuarios",
            CadUsuarioCadGrupoFamiliarId = "CadUsuarioCadGrupoFamiliarId",
            CadUsuarioUserId = "CadUsuarioUserId",
            CadUsuarioNome = "CadUsuarioNome",
            CadUsuarioTelefone = "CadUsuarioTelefone",
            CadUsuarioDataCriacao = "CadUsuarioDataCriacao",
            CadUsuarioEmail = "CadUsuarioEmail",
            CadUsuarioAtivo = "CadUsuarioAtivo",
            CodigoTabTipoContaDescricao = "CodigoTabTipoContaDescricao"
        }
    }
}

