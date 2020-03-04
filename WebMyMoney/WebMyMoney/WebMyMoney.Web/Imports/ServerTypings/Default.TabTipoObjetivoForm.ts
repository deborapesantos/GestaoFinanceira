
namespace WebMyMoney.Default {
    export class TabTipoObjetivoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoObjetivo';
    }

    export interface TabTipoObjetivoForm {
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TabTipoObjetivoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}