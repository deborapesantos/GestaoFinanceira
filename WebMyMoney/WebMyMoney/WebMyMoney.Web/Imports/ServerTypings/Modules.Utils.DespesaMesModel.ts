namespace WebMyMoney.Modules.Utils {
    export interface DespesaMesModel {
        CadDespesaId?: number;
        CadContaId?: number;
        CadGrupoFamiliarId?: number;
        CadUsuarioId?: number;
        CadFaturaCartaoCreditoId?: number;
        CodigoTabTipoDespesa?: number;
        CadParticipanteId?: number;
        Titulo?: string;
        DataPagamento?: string;
        DataCriacao?: string;
        IsFixo?: boolean;
        DataFixaVencimento?: number;
        IsParcelado?: boolean;
        QdteParcelas?: number;
        DataVencimento?: string;
        ValorTotal?: number;
        MultasJuros?: number;
        Pago?: boolean;
        Icon?: string;
        Ativo?: boolean;
        Imposto?: number;
        Descontos?: number;
        Valor?: number;
        Descricao?: string;
        Qtde?: number;
    }
}

