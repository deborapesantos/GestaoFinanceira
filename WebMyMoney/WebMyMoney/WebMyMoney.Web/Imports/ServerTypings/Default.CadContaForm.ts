
namespace WebMyMoney.Default {
    export class CadContaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadConta';
    }

    export interface CadContaForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoConta: Serenity.IntegerEditor;
        ValorInicial: Serenity.DecimalEditor;
        SaldoAtual: Serenity.DecimalEditor;
        Titulo: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
        DataInicial: Serenity.DateEditor;
    }

    [,
        ['CadGrupoFamiliarId', () => Serenity.IntegerEditor],
        ['CadUsuarioId', () => Serenity.IntegerEditor],
        ['CodigoTabTipoConta', () => Serenity.IntegerEditor],
        ['ValorInicial', () => Serenity.DecimalEditor],
        ['SaldoAtual', () => Serenity.DecimalEditor],
        ['Titulo', () => Serenity.StringEditor],
        ['Ativo', () => Serenity.BooleanEditor],
        ['DataInicial', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(CadContaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}