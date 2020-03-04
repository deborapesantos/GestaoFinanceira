
namespace WebMyMoney.Default {
    export class TabTipoReceitaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoReceita';
    }

    export interface TabTipoReceitaForm {
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TabTipoReceitaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}