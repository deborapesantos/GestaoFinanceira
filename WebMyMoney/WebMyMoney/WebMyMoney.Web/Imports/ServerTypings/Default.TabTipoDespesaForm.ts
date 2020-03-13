namespace WebMyMoney.Default {
    export interface TabTipoDespesaForm {
        Descricao: Serenity.StringEditor;
        Icone: Serenity.StringEditor;
    }

    export class TabTipoDespesaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoDespesa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TabTipoDespesaForm.init)  {
                TabTipoDespesaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TabTipoDespesaForm, [
                    'Descricao', w0,
                    'Icone', w0
                ]);
            }
        }
    }
}

