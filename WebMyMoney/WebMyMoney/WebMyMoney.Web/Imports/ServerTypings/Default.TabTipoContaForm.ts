
namespace WebMyMoney.Default {
    export class TabTipoContaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoConta';
    }

    export interface TabTipoContaForm {
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TabTipoContaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}