namespace WebMyMoney.Default {
    export interface CadCartaoCreditoRow {
        CadCartaoCreditoId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoCartaoCredito?: number;
        Titulo?: string;
        Descricao?: string;
        DiaPagarFatura?: number;
        DiaFecharFatura?: number;
        ValorLimiteTotal?: number;
        ValorLimiteAtual?: number;
        Saldo?: number;
        Ativo?: boolean;
        DiaVencimentofatura?: string;
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

    export namespace CadCartaoCreditoRow {
        export const idProperty = 'CadCartaoCreditoId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadCartaoCredito';
        export const lookupKey = 'Default.CadCartaoCredito';

        export function getLookup(): Q.Lookup<CadCartaoCreditoRow> {
            return Q.getLookup<CadCartaoCreditoRow>('Default.CadCartaoCredito');
        }
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadCartaoCreditoId = "CadCartaoCreditoId",
            CadContaId = "CadContaId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            CadUsuarioId = "CadUsuarioId",
            CodigoTabTipoCartaoCredito = "CodigoTabTipoCartaoCredito",
            Titulo = "Titulo",
            Descricao = "Descricao",
            DiaPagarFatura = "DiaPagarFatura",
            DiaFecharFatura = "DiaFecharFatura",
            ValorLimiteTotal = "ValorLimiteTotal",
            ValorLimiteAtual = "ValorLimiteAtual",
            Saldo = "Saldo",
            Ativo = "Ativo",
            DiaVencimentofatura = "DiaVencimentofatura",
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
            CodigoTabTipoCartaoCreditoDescricao = "CodigoTabTipoCartaoCreditoDescricao",
            CodigoTabTipoCartaoCreditoIcone = "CodigoTabTipoCartaoCreditoIcone"
        }
    }
}

