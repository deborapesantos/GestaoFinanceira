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
        Juros?: number;
        Rendimento?: number;
        Imposto?: number;
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
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario: Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadReceitaId = "CadReceitaId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            CadContaId = "CadContaId",
            CadUsuarioId = "CadUsuarioId",
            CodigoTabTipoReceita = "CodigoTabTipoReceita",
            Titulo = "Titulo",
            Descricao = "Descricao",
            DataRecebimento = "DataRecebimento",
            DataCriacao = "DataCriacao",
            IsFixo = "IsFixo",
            DataFixaRecebimento = "DataFixaRecebimento",
            Valor = "Valor",
            Recebido = "Recebido",
            Juros = "Juros",
            Rendimento = "Rendimento",
            Imposto = "Imposto",
            Ativo = "Ativo",
            CadGrupoFamiliarCadAssinanteId = "CadGrupoFamiliarCadAssinanteId",
            CadGrupoFamiliarAtivo = "CadGrupoFamiliarAtivo",
            CadGrupoFamiliarDataCriacao = "CadGrupoFamiliarDataCriacao",
            CadGrupoFamiliarCodigoAcesso = "CadGrupoFamiliarCodigoAcesso",
            CadGrupoFamiliarQdteUsuarios = "CadGrupoFamiliarQdteUsuarios",
            CadContaCadGrupoFamiliarId = "CadContaCadGrupoFamiliarId",
            CadContaCadUsuarioId = "CadContaCadUsuarioId",
            CadContaCodigoTabTipoConta = "CadContaCodigoTabTipoConta",
            CadContaValorInicial = "CadContaValorInicial",
            CadContaSaldoAtual = "CadContaSaldoAtual",
            CadContaTitulo = "CadContaTitulo",
            CadContaAtivo = "CadContaAtivo",
            CadContaDataInicial = "CadContaDataInicial",
            CadUsuarioCadGrupoFamiliarId = "CadUsuarioCadGrupoFamiliarId",
            CadUsuarioUserId = "CadUsuarioUserId",
            CadUsuarioNome = "CadUsuarioNome",
            CadUsuarioTelefone = "CadUsuarioTelefone",
            CadUsuarioDataCriacao = "CadUsuarioDataCriacao",
            CadUsuarioEmail = "CadUsuarioEmail",
            CadUsuarioAtivo = "CadUsuarioAtivo",
            CodigoTabTipoReceitaDescricao = "CodigoTabTipoReceitaDescricao"
        }
    }
}

