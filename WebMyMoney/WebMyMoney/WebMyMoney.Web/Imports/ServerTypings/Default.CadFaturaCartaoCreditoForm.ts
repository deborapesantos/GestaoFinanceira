namespace WebMyMoney.Default {
    export interface CadFaturaCartaoCreditoForm {
        CadCartaoCreditoId: Serenity.LookupEditor;
        MesFaturaVigente: Serenity.IntegerEditor;
        DiaVencimentoFatura: Serenity.DateEditor;
        DataPagamentoFatura: Serenity.DateEditor;
        DataFechamentoFatura: Serenity.DateEditor;
        DiaFecharFatura: Serenity.IntegerEditor;
        ValorParcialFaturaAtual: Serenity.DecimalEditor;
        IsParcelarFatura: Serenity.BooleanEditor;
        NumParcelasFatura: Serenity.IntegerEditor;
        SaldoAnterior: Serenity.DecimalEditor;
        Ativo: Serenity.BooleanEditor;
        Pago: Serenity.BooleanEditor;
    }

    export class CadFaturaCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadFaturaCartaoCredito';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadFaturaCartaoCreditoForm.init)  {
                CadFaturaCartaoCreditoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(CadFaturaCartaoCreditoForm, [
                    'CadCartaoCreditoId', w0,
                    'MesFaturaVigente', w1,
                    'DiaVencimentoFatura', w2,
                    'DataPagamentoFatura', w2,
                    'DataFechamentoFatura', w2,
                    'DiaFecharFatura', w1,
                    'ValorParcialFaturaAtual', w3,
                    'IsParcelarFatura', w4,
                    'NumParcelasFatura', w1,
                    'SaldoAnterior', w3,
                    'Ativo', w4,
                    'Pago', w4
                ]);
            }
        }
    }
}

