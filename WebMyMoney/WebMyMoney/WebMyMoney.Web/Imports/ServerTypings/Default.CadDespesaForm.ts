namespace WebMyMoney.Default {
    export interface CadDespesaForm {
        CadContaId: Serenity.LookupEditor;
        CadGrupoFamiliarId: Serenity.LookupEditor;
        CadUsuarioId: Serenity.LookupEditor;
        CadFaturaCartaoCreditoId: Serenity.LookupEditor;
        CodigoTabTipoDespesa: Serenity.LookupEditor;
        CadParticipanteId: Serenity.LookupEditor;
        Titulo: Serenity.StringEditor;
        DataPagamento: Serenity.DateEditor;
        DataCriacao: Serenity.DateEditor;
        IsFixo: Serenity.BooleanEditor;
        DataFixaVencimento: Serenity.IntegerEditor;
        IsParcelado: Serenity.BooleanEditor;
        QdteParcelas: Serenity.IntegerEditor;
        DataVencimento: Serenity.DateEditor;
        ValorTotal: Serenity.DecimalEditor;
        MultasJuros: Serenity.DecimalEditor;
        Pago: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
        Imposto: Serenity.DecimalEditor;
        Descontos: Serenity.DecimalEditor;
    }

    export class CadDespesaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadDespesa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadDespesaForm.init)  {
                CadDespesaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(CadDespesaForm, [
                    'CadContaId', w0,
                    'CadGrupoFamiliarId', w0,
                    'CadUsuarioId', w0,
                    'CadFaturaCartaoCreditoId', w0,
                    'CodigoTabTipoDespesa', w0,
                    'CadParticipanteId', w0,
                    'Titulo', w1,
                    'DataPagamento', w2,
                    'DataCriacao', w2,
                    'IsFixo', w3,
                    'DataFixaVencimento', w4,
                    'IsParcelado', w3,
                    'QdteParcelas', w4,
                    'DataVencimento', w2,
                    'ValorTotal', w5,
                    'MultasJuros', w5,
                    'Pago', w3,
                    'Ativo', w3,
                    'Imposto', w5,
                    'Descontos', w5
                ]);
            }
        }
    }
}

