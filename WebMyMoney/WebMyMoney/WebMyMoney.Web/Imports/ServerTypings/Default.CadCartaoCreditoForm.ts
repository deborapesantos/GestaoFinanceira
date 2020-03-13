namespace WebMyMoney.Default {
    export interface CadCartaoCreditoForm {
        CadContaId: Serenity.LookupEditor;
        CadGrupoFamiliarId: Serenity.LookupEditor;
        CadUsuarioId: Serenity.LookupEditor;
        CodigoTabTipoCartaoCredito: Serenity.LookupEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        DiaVencimentofatura: Serenity.DateEditor;
        DiaPagarFatura: Serenity.IntegerEditor;
        DiaFecharFatura: Serenity.IntegerEditor;
        ValorLimiteTotal: Serenity.DecimalEditor;
        ValorLimiteAtual: Serenity.DecimalEditor;
        Saldo: Serenity.DecimalEditor;
        Ativo: Serenity.BooleanEditor;
    }

    export class CadCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadCartaoCredito';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadCartaoCreditoForm.init)  {
                CadCartaoCreditoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(CadCartaoCreditoForm, [
                    'CadContaId', w0,
                    'CadGrupoFamiliarId', w0,
                    'CadUsuarioId', w0,
                    'CodigoTabTipoCartaoCredito', w0,
                    'Titulo', w1,
                    'Descricao', w1,
                    'DiaVencimentofatura', w2,
                    'DiaPagarFatura', w3,
                    'DiaFecharFatura', w3,
                    'ValorLimiteTotal', w4,
                    'ValorLimiteAtual', w4,
                    'Saldo', w4,
                    'Ativo', w5
                ]);
            }
        }
    }
}

