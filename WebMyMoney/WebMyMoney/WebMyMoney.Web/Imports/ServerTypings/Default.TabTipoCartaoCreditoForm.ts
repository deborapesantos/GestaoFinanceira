namespace WebMyMoney.Default {
    export interface TabTipoCartaoCreditoForm {
        Descricao: Serenity.StringEditor;
        Icone: Serenity.StringEditor;
    }

    export class TabTipoCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoCartaoCredito';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TabTipoCartaoCreditoForm.init)  {
                TabTipoCartaoCreditoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TabTipoCartaoCreditoForm, [
                    'Descricao', w0,
                    'Icone', w0
                ]);
            }
        }
    }
}

