namespace WebMyMoney.Default {
    export interface CadFaturaCartaoCreditoRow {
        CadFaturaCartaoCreditoId?: number;
        CadCartaoCreditoId?: number;
        MesFaturaVigente?: number;
        DiaVencimentoFatura?: string;
        DataPagamentoFatura?: string;
        DataFechamentoFatura?: string;
        DiaFecharFatura?: number;
        ValorParcialFaturaAtual?: number;
        IsParcelarFatura?: boolean;
        NumParcelasFatura?: number;
        SaldoAnterior?: number;
        Ativo?: boolean;
        Pago?: boolean;
        MesVigente?: string;
        CadCartaoCreditoCadContaId?: number;
        CadCartaoCreditoCadGrupoFamiliarId?: number;
        CadCartaoCreditoCadUsuarioId?: number;
        CadCartaoCreditoCodigoTabTipoCartaoCredito?: number;
        CadCartaoCreditoTitulo?: string;
        CadCartaoCreditoDescricao?: string;
        CadCartaoCreditoDiaVencimentoFatura?: string;
        CadCartaoCreditoDiaPagarFatura?: number;
        CadCartaoCreditoDiaFecharFatura?: number;
        CadCartaoCreditoValorLimiteTotal?: number;
        CadCartaoCreditoValorLimiteAtual?: number;
        CadCartaoCreditoSaldo?: number;
        CadCartaoCreditoAtivo?: boolean;
    }

    export namespace CadFaturaCartaoCreditoRow {
        export const idProperty = 'CadFaturaCartaoCreditoId';
        export const nameProperty = 'MesVigente';
        export const localTextPrefix = 'Default.CadFaturaCartaoCredito';
        export const lookupKey = 'Default.CadFaturaCartaoCredito';

        export function getLookup(): Q.Lookup<CadFaturaCartaoCreditoRow> {
            return Q.getLookup<CadFaturaCartaoCreditoRow>('Default.CadFaturaCartaoCredito');
        }
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadFaturaCartaoCreditoId = "CadFaturaCartaoCreditoId",
            CadCartaoCreditoId = "CadCartaoCreditoId",
            MesFaturaVigente = "MesFaturaVigente",
            DiaVencimentoFatura = "DiaVencimentoFatura",
            DataPagamentoFatura = "DataPagamentoFatura",
            DataFechamentoFatura = "DataFechamentoFatura",
            DiaFecharFatura = "DiaFecharFatura",
            ValorParcialFaturaAtual = "ValorParcialFaturaAtual",
            IsParcelarFatura = "IsParcelarFatura",
            NumParcelasFatura = "NumParcelasFatura",
            SaldoAnterior = "SaldoAnterior",
            Ativo = "Ativo",
            Pago = "Pago",
            MesVigente = "MesVigente",
            CadCartaoCreditoCadContaId = "CadCartaoCreditoCadContaId",
            CadCartaoCreditoCadGrupoFamiliarId = "CadCartaoCreditoCadGrupoFamiliarId",
            CadCartaoCreditoCadUsuarioId = "CadCartaoCreditoCadUsuarioId",
            CadCartaoCreditoCodigoTabTipoCartaoCredito = "CadCartaoCreditoCodigoTabTipoCartaoCredito",
            CadCartaoCreditoTitulo = "CadCartaoCreditoTitulo",
            CadCartaoCreditoDescricao = "CadCartaoCreditoDescricao",
            CadCartaoCreditoDiaVencimentoFatura = "CadCartaoCreditoDiaVencimentoFatura",
            CadCartaoCreditoDiaPagarFatura = "CadCartaoCreditoDiaPagarFatura",
            CadCartaoCreditoDiaFecharFatura = "CadCartaoCreditoDiaFecharFatura",
            CadCartaoCreditoValorLimiteTotal = "CadCartaoCreditoValorLimiteTotal",
            CadCartaoCreditoValorLimiteAtual = "CadCartaoCreditoValorLimiteAtual",
            CadCartaoCreditoSaldo = "CadCartaoCreditoSaldo",
            CadCartaoCreditoAtivo = "CadCartaoCreditoAtivo"
        }
    }
}

