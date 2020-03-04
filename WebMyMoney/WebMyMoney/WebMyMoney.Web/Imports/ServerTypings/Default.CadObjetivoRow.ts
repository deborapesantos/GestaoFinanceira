
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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadObjetivoId;
            export declare const CadContaId;
            export declare const CadGrupoFamiliarId;
            export declare const CadUsuarioId;
            export declare const CodigoTabTipoObjetivo;
            export declare const Titulo;
            export declare const Descricao;
            export declare const ValorFinal;
            export declare const ValorInicial;
            export declare const ValorAtual;
            export declare const DataFinal;
            export declare const DataInicial;
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
            export declare const CodigoTabTipoObjetivoDescricao;
        }

        [
            'CadObjetivoId',
            'CadContaId',
            'CadGrupoFamiliarId',
            'CadUsuarioId',
            'CodigoTabTipoObjetivo',
            'Titulo',
            'Descricao',
            'ValorFinal',
            'ValorInicial',
            'ValorAtual',
            'DataFinal',
            'DataInicial',
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
            'CodigoTabTipoObjetivoDescricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}