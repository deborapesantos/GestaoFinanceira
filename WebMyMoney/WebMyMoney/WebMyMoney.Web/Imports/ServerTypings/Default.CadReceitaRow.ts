
namespace WebMyMoney.Default {
    export interface CadReceitaRow {
        CadReceitaId?: number;
        CadGrupoFamiliarId?: number;
        CadContaId?: number;
        CadUsuarioId?: number;
        CodigoTabTipoReceita?: number;
        Titulo?: string;
        Descricao?: string;
        DataRecebimento?: string;
        DataCriacao?: string;
        IsFixo?: boolean;
        DataFixaRecebimento?: number;
        Valor?: number;
        Recebido?: boolean;
        Ativo?: boolean;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
        CadContaCadGrupoFamiliarId?: number;
        CadContaCadUsuarioId?: number;
        CadContaCodigoTabTipoConta?: number;
        CadContaValorInicial?: number;
        CadContaSaldoAtual?: number;
        CadContaTitulo?: string;
        CadContaAtivo?: boolean;
        CadContaDataInicial?: string;
        CadUsuarioCadGrupoFamiliarId?: number;
        CadUsuarioUserId?: number;
        CadUsuarioNome?: string;
        CadUsuarioTelefone?: string;
        CadUsuarioDataCriacao?: string;
        CadUsuarioEmail?: string;
        CadUsuarioAtivo?: boolean;
        CodigoTabTipoReceitaDescricao?: string;
    }

    export namespace CadReceitaRow {
        export const idProperty = 'CadReceitaId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadReceita';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadReceitaId;
            export declare const CadGrupoFamiliarId;
            export declare const CadContaId;
            export declare const CadUsuarioId;
            export declare const CodigoTabTipoReceita;
            export declare const Titulo;
            export declare const Descricao;
            export declare const DataRecebimento;
            export declare const DataCriacao;
            export declare const IsFixo;
            export declare const DataFixaRecebimento;
            export declare const Valor;
            export declare const Recebido;
            export declare const Ativo;
            export declare const CadGrupoFamiliarCadAssinanteId;
            export declare const CadGrupoFamiliarAtivo;
            export declare const CadGrupoFamiliarDataCriacao;
            export declare const CadGrupoFamiliarCodigoAcesso;
            export declare const CadGrupoFamiliarQdteUsuarios;
            export declare const CadContaCadGrupoFamiliarId;
            export declare const CadContaCadUsuarioId;
            export declare const CadContaCodigoTabTipoConta;
            export declare const CadContaValorInicial;
            export declare const CadContaSaldoAtual;
            export declare const CadContaTitulo;
            export declare const CadContaAtivo;
            export declare const CadContaDataInicial;
            export declare const CadUsuarioCadGrupoFamiliarId;
            export declare const CadUsuarioUserId;
            export declare const CadUsuarioNome;
            export declare const CadUsuarioTelefone;
            export declare const CadUsuarioDataCriacao;
            export declare const CadUsuarioEmail;
            export declare const CadUsuarioAtivo;
            export declare const CodigoTabTipoReceitaDescricao;
        }

        [
            'CadReceitaId',
            'CadGrupoFamiliarId',
            'CadContaId',
            'CadUsuarioId',
            'CodigoTabTipoReceita',
            'Titulo',
            'Descricao',
            'DataRecebimento',
            'DataCriacao',
            'IsFixo',
            'DataFixaRecebimento',
            'Valor',
            'Recebido',
            'Ativo',
            'CadGrupoFamiliarCadAssinanteId',
            'CadGrupoFamiliarAtivo',
            'CadGrupoFamiliarDataCriacao',
            'CadGrupoFamiliarCodigoAcesso',
            'CadGrupoFamiliarQdteUsuarios',
            'CadContaCadGrupoFamiliarId',
            'CadContaCadUsuarioId',
            'CadContaCodigoTabTipoConta',
            'CadContaValorInicial',
            'CadContaSaldoAtual',
            'CadContaTitulo',
            'CadContaAtivo',
            'CadContaDataInicial',
            'CadUsuarioCadGrupoFamiliarId',
            'CadUsuarioUserId',
            'CadUsuarioNome',
            'CadUsuarioTelefone',
            'CadUsuarioDataCriacao',
            'CadUsuarioEmail',
            'CadUsuarioAtivo',
            'CodigoTabTipoReceitaDescricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}