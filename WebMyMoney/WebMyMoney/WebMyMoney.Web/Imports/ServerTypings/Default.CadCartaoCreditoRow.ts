
namespace WebMyMoney.Default {
    export interface CadCartaoCreditoRow {
        CadCartaoCreditoId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoCartaoCredito?: number;
        Titulo?: string;
        Descricao?: string;
        DataPagamentoFatura?: string;
        DiaPagarFatura?: number;
        DataFechamentoFatura?: string;
        DiaFecharFatura?: number;
        ValorLimiteTotal?: number;
        ValorLimiteAtual?: number;
        ValorParcialFaturaAtual?: number;
        Saldo?: number;
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
        CodigoTabTipoCartaoCreditoDescricao?: string;
        CodigoTabTipoCartaoCreditoIcone?: string;
    }

    export namespace CadCartaoCreditoRow {
        export const idProperty = 'CadCartaoCreditoId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadCartaoCredito';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadCartaoCreditoId;
            export declare const CadContaId;
            export declare const CadGrupoFamiliarId;
            export declare const CadUsuarioId;
            export declare const CodigoTabTipoCartaoCredito;
            export declare const Titulo;
            export declare const Descricao;
            export declare const DataPagamentoFatura;
            export declare const DiaPagarFatura;
            export declare const DataFechamentoFatura;
            export declare const DiaFecharFatura;
            export declare const ValorLimiteTotal;
            export declare const ValorLimiteAtual;
            export declare const ValorParcialFaturaAtual;
            export declare const Saldo;
            export declare const Ativo;
            export declare const CadContaCadGrupoFamiliarId;
            export declare const CadContaCadUsuarioId;
            export declare const CadContaCodigoTabTipoConta;
            export declare const CadContaValorInicial;
            export declare const CadContaSaldoAtual;
            export declare const CadContaTitulo;
            export declare const CadContaAtivo;
            export declare const CadContaDataInicial;
            export declare const CadGrupoFamiliarCadAssinanteId;
            export declare const CadGrupoFamiliarAtivo;
            export declare const CadGrupoFamiliarDataCriacao;
            export declare const CadGrupoFamiliarCodigoAcesso;
            export declare const CadGrupoFamiliarQdteUsuarios;
            export declare const CadUsuarioCadGrupoFamiliarId;
            export declare const CadUsuarioUserId;
            export declare const CadUsuarioNome;
            export declare const CadUsuarioTelefone;
            export declare const CadUsuarioDataCriacao;
            export declare const CadUsuarioEmail;
            export declare const CadUsuarioAtivo;
            export declare const CodigoTabTipoCartaoCreditoDescricao;
            export declare const CodigoTabTipoCartaoCreditoIcone;
        }

        [
            'CadCartaoCreditoId',
            'CadContaId',
            'CadGrupoFamiliarId',
            'CadUsuarioId',
            'CodigoTabTipoCartaoCredito',
            'Titulo',
            'Descricao',
            'DataPagamentoFatura',
            'DiaPagarFatura',
            'DataFechamentoFatura',
            'DiaFecharFatura',
            'ValorLimiteTotal',
            'ValorLimiteAtual',
            'ValorParcialFaturaAtual',
            'Saldo',
            'Ativo',
            'CadContaCadGrupoFamiliarId',
            'CadContaCadUsuarioId',
            'CadContaCodigoTabTipoConta',
            'CadContaValorInicial',
            'CadContaSaldoAtual',
            'CadContaTitulo',
            'CadContaAtivo',
            'CadContaDataInicial',
            'CadGrupoFamiliarCadAssinanteId',
            'CadGrupoFamiliarAtivo',
            'CadGrupoFamiliarDataCriacao',
            'CadGrupoFamiliarCodigoAcesso',
            'CadGrupoFamiliarQdteUsuarios',
            'CadUsuarioCadGrupoFamiliarId',
            'CadUsuarioUserId',
            'CadUsuarioNome',
            'CadUsuarioTelefone',
            'CadUsuarioDataCriacao',
            'CadUsuarioEmail',
            'CadUsuarioAtivo',
            'CodigoTabTipoCartaoCreditoDescricao',
            'CodigoTabTipoCartaoCreditoIcone'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}