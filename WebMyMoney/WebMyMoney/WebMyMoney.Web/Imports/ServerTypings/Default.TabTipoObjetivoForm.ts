namespace WebMyMoney.Default {
    export interface TabTipoObjetivoForm {
        Descricao: Serenity.StringEditor;
    }

    export class TabTipoObjetivoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoObjetivo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TabTipoObjetivoForm.init)  {
                TabTipoObjetivoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TabTipoObjetivoForm, [
                    'Descricao', w0
                ]);
            }
        }
    }
}

