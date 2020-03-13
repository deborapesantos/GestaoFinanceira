namespace WebMyMoney.Default {
    export interface TabTipoContaForm {
        Descricao: Serenity.StringEditor;
    }

    export class TabTipoContaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoConta';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TabTipoContaForm.init)  {
                TabTipoContaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TabTipoContaForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

