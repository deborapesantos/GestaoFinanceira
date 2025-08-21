namespace WebMyMoney.Modules.Utils {
    export interface CartaoCreditoModel {
        listaDespesaCartaoCredito?: Default.CadDespesaRow[];
        Descricao?: string;
        Titulo?: string;
        Icone?: string;
        CadCartaoCreditoId?: number;
        CadFaturaId?: number;
        CadContaId?: number;
        CadUsuarioId?: number;
        ValorFatura?: number;
        DiaVencimento?: number;
        DataPagamento?: string;
        LimiteTotal?: number;
        LimiteDisponivel?: number;
        FaturaAberta?: boolean;
        Tipo?: number;
        Pago?: boolean;
    }
}

