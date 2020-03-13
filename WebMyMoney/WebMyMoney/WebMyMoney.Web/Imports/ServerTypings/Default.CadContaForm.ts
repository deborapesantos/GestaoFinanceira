namespace WebMyMoney.Default {
    export interface CadContaForm {
        CadGrupoFamiliarId: Serenity.LookupEditor;
        CadUsuarioId: Serenity.LookupEditor;
        CodigoTabTipoConta: Serenity.LookupEditor;
        ValorInicial: Serenity.DecimalEditor;
        SaldoAtual: Serenity.DecimalEditor;
        Titulo: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
        DataInicial: Serenity.DateEditor;
    }

    export class CadContaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadConta';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadContaForm.init)  {
                CadContaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;

                Q.initFormType(CadContaForm, [
                    'CadGrupoFamiliarId', w0,
                    'CadUsuarioId', w0,
                    'CodigoTabTipoConta', w0,
                    'ValorInicial', w1,
                    'SaldoAtual', w1,
                    'Titulo', w2,
                    'Ativo', w3,
                    'DataInicial', w4
                ]);
            }
        }
    }
}

