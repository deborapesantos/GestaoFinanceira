namespace WebMyMoney.Default {
    export interface CadObjetivoRow {
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

    export namespace CadObjetivoRow {
        export const idProperty = 'CadObjetivoId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadObjetivo';
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadObjetivoId = "CadObjetivoId",
            CadContaId = "CadContaId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            CadUsuarioId = "CadUsuarioId",
            CodigoTabTipoObjetivo = "CodigoTabTipoObjetivo",
            Titulo = "Titulo",
            Descricao = "Descricao",
            ValorFinal = "ValorFinal",
            ValorInicial = "ValorInicial",
            ValorAtual = "ValorAtual",
            DataFinal = "DataFinal",
            DataInicial = "DataInicial",
            Ativo = "Ativo",
            CadContaCadGrupoFamiliarId = "CadContaCadGrupoFamiliarId",
            CadContaCadUsuarioId = "CadContaCadUsuarioId",
            CadContaCodigoTabTipoConta = "CadContaCodigoTabTipoConta",
            CadContaValorInicial = "CadContaValorInicial",
            CadContaSaldoAtual = "CadContaSaldoAtual",
            CadContaTitulo = "CadContaTitulo",
            CadContaAtivo = "CadContaAtivo",
            CadContaDataInicial = "CadContaDataInicial",
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
            CodigoTabTipoObjetivoDescricao = "CodigoTabTipoObjetivoDescricao"
        }
    }
}

