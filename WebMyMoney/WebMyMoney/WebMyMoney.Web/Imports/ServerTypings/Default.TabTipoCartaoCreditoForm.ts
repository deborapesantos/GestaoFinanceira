
namespace WebMyMoney.Default {
    export class TabTipoCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TabTipoCartaoCredito';
    }

    export interface TabTipoCartaoCreditoForm {
        Descricao: Serenity.StringEditor;
        Icone: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor],
        ['Icone', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TabTipoCartaoCreditoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}