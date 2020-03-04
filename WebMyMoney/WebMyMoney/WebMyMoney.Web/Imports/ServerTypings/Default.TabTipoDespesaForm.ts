
namespace WebMyMoney.Default {
    export class TabTipoDespesaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoDespesa';
    }

    export interface TabTipoDespesaForm {
        Descricao: Serenity.StringEditor;
        Icone: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor],
        ['Icone', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TabTipoDespesaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}