namespace WebMyMoney.Default {
    export interface CadDespesaRow {
        CadDespesaId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CadFaturaCartaoCreditoId?: number;
        CadParticipanteId?: number;
        CodigoTabTipoDespesa?: number;
        Titulo?: string;
        DataPagamento?: string;
        DataCriacao?: string;
        IsFixo?: boolean;
        IsParcelado?: boolean;
        DataVencimento?: string;
        ValorTotal?: number;
        MultasJuros?: number;
        DataFixaVencimento?: number;
        Pago?: boolean;
        Ativo?: boolean;
        Imposto?: number;
        Descontos?: number;
        NumParcela?: number;
        QdteParcelas?: number;
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
        NomeParticipante?: string;
        CpfCnpjParticipante?: string;
    }

    export namespace CadDespesaRow {
        export const idProperty = 'CadDespesaId';
        export const nameProperty = 'Titulo';
        export const localTextPrefix = 'Default.CadDespesa';
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadDespesaId = "CadDespesaId",
            CadContaId = "CadContaId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            CadUsuarioId = "CadUsuarioId",
            CadFaturaCartaoCreditoId = "CadFaturaCartaoCreditoId",
            CadParticipanteId = "CadParticipanteId",
            CodigoTabTipoDespesa = "CodigoTabTipoDespesa",
            Titulo = "Titulo",
            DataPagamento = "DataPagamento",
            DataCriacao = "DataCriacao",
            IsFixo = "IsFixo",
            IsParcelado = "IsParcelado",
            DataVencimento = "DataVencimento",
            ValorTotal = "ValorTotal",
            MultasJuros = "MultasJuros",
            DataFixaVencimento = "DataFixaVencimento",
            Pago = "Pago",
            Ativo = "Ativo",
            Imposto = "Imposto",
            Descontos = "Descontos",
            NumParcela = "NumParcela",
            QdteParcelas = "QdteParcelas",
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
            CodigoTabTipoDespesaDescricao = "CodigoTabTipoDespesaDescricao",
            CodigoTabTipoDespesaIcone = "CodigoTabTipoDespesaIcone",
            NomeParticipante = "NomeParticipante",
            CpfCnpjParticipante = "CpfCnpjParticipante"
        }
    }
}

