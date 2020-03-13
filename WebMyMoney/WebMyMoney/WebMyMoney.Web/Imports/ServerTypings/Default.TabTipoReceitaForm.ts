namespace WebMyMoney.Default {
    export interface TabTipoReceitaForm {
        Descricao: Serenity.StringEditor;
    }

    export class TabTipoReceitaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoReceita';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TabTipoReceitaForm.init)  {
                TabTipoReceitaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TabTipoReceitaForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

