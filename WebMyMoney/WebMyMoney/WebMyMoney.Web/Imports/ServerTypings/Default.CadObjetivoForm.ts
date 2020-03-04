
namespace WebMyMoney.Default {
    export class CadObjetivoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadObjetivo';
    }

    export interface CadObjetivoForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoObjetivo: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        ValorFinal: Serenity.DecimalEditor;
        ValorInicial: Serenity.DecimalEditor;
        ValorAtual: Serenity.DecimalEditor;
        DataFinal: Serenity.DateEditor;
        DataInicial: Serenity.DateEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [,
        ['CadContaId', () => Serenity.IntegerEditor],
        ['CadGrupoFamiliarId', () => Serenity.IntegerEditor],
        ['CadUsuarioId', () => Serenity.IntegerEditor],
        ['CodigoTabTipoObjetivo', () => Serenity.IntegerEditor],
        ['Titulo', () => Serenity.StringEditor],
        ['Descricao', () => Serenity.StringEditor],
        ['ValorFinal', () => Serenity.DecimalEditor],
        ['ValorInicial', () => Serenity.DecimalEditor],
        ['ValorAtual', () => Serenity.DecimalEditor],
        ['DataFinal', () => Serenity.DateEditor],
        ['DataInicial', () => Serenity.DateEditor],
        ['Ativo', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CadObjetivoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}