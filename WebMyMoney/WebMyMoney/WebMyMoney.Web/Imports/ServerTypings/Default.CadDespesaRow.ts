
namespace WebMyMoney.Default {
    export interface CadDespesaRow {
        CadDespesaId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoDespesa?: number;
        Titulo?: string;
        DataPagamento?: string;
        DataCriacao?: string;
        IsFixo?: boolean;
        DataVencimento?: string;
        ValorTotal?: number;
        MultasJuros?: number;
        DataFixaVencimento?: number;
        Pago?: boolean;
        Ativo?: boolean;
        Descontos?: number;
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
        CodigoTabTipoDespesaDescricao?: string;
        CodigoTabTipoDespesaIcone?: string;
    }

    export namespace CadDespesaRow {
        export const idProperty = 'CadDespesaId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadDespesa';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadDespesaId;
            export declare const CadContaId;
            export declare const CadGrupoFamiliarId;
            export declare const CadUsuarioId;
            export declare const CodigoTabTipoDespesa;
            export declare const Titulo;
            export declare const DataPagamento;
            export declare const DataCriacao;
            export declare const IsFixo;
            export declare const DataVencimento;
            export declare const ValorTotal;
            export declare const MultasJuros;
            export declare const DataFixaVencimento;
            export declare const Pago;
            export declare const Ativo;
            export declare const Descontos;
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
            export declare const CodigoTabTipoDespesaDescricao;
            export declare const CodigoTabTipoDespesaIcone;
        }

        [
            'CadDespesaId',
            'CadContaId',
            'CadGrupoFamiliarId',
            'CadUsuarioId',
            'CodigoTabTipoDespesa',
            'Titulo',
            'DataPagamento',
            'DataCriacao',
            'IsFixo',
            'DataVencimento',
            'ValorTotal',
            'MultasJuros',
            'DataFixaVencimento',
            'Pago',
            'Ativo',
            'Descontos',
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
            'CodigoTabTipoDespesaDescricao',
            'CodigoTabTipoDespesaIcone'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}