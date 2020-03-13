namespace WebMyMoney.Modules.Utils {
    export interface DespesaMesModel {
        CadContaId?: number;
        CadUsuarioId?: number;
        CadDespesaId?: number;
        Valor?: number;
        DataVencimento?: string;
        Descricao?: string;
        Qtde?: number;
    }
}

