
namespace WebMyMoney.Default {
    export class CadDespesaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadDespesa';
    }

    export interface CadDespesaForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoDespesa: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        DataPagamento: Serenity.DateEditor;
        DataCriacao: Serenity.DateEditor;
        IsFixo: Serenity.BooleanEditor;
        DataVencimento: Serenity.DateEditor;
        ValorTotal: Serenity.DecimalEditor;
        MultasJuros: Serenity.DecimalEditor;
        DataFixaVencimento: Serenity.IntegerEditor;
        Pago: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
        Descontos: Serenity.DecimalEditor;
    }

    [,
        ['CadContaId', () => Serenity.IntegerEditor],
        ['CadGrupoFamiliarId', () => Serenity.IntegerEditor],
        ['CadUsuarioId', () => Serenity.IntegerEditor],
        ['CodigoTabTipoDespesa', () => Serenity.IntegerEditor],
        ['Titulo', () => Serenity.StringEditor],
        ['DataPagamento', () => Serenity.DateEditor],
        ['DataCriacao', () => Serenity.DateEditor],
        ['IsFixo', () => Serenity.BooleanEditor],
        ['DataVencimento', () => Serenity.DateEditor],
        ['ValorTotal', () => Serenity.DecimalEditor],
        ['MultasJuros', () => Serenity.DecimalEditor],
        ['DataFixaVencimento', () => Serenity.IntegerEditor],
        ['Pago', () => Serenity.BooleanEditor],
        ['Ativo', () => Serenity.BooleanEditor],
        ['Descontos', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(CadDespesaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}