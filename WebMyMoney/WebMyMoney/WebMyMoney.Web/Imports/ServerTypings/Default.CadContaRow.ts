
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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CadContaId;
            export declare const CadGrupoFamiliarId;
            export declare const CadUsuarioId;
            export declare const CodigoTabTipoConta;
            export declare const ValorInicial;
            export declare const SaldoAtual;
            export declare const Titulo;
            export declare const Ativo;
            export declare const DataInicial;
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
            export declare const CodigoTabTipoContaDescricao;
        }

        [
            'CadContaId',
            'CadGrupoFamiliarId',
            'CadUsuarioId',
            'CodigoTabTipoConta',
            'ValorInicial',
            'SaldoAtual',
            'Titulo',
            'Ativo',
            'DataInicial',
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
            'CodigoTabTipoContaDescricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}