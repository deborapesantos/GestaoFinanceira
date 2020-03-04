
namespace WebMyMoney.Default {
    export class CadReceitaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadReceita';
    }

    export interface CadReceitaForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadContaId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoReceita: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        DataRecebimento: Serenity.DateEditor;
        DataCriacao: Serenity.DateEditor;
        IsFixo: Serenity.BooleanEditor;
        DataFixaRecebimento: Serenity.IntegerEditor;
        Valor: Serenity.DecimalEditor;
        Recebido: Serenity.BooleanEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [,
        ['CadGrupoFamiliarId', () => Serenity.IntegerEditor],
        ['CadContaId', () => Serenity.IntegerEditor],
        ['CadUsuarioId', () => Serenity.IntegerEditor],
        ['CodigoTabTipoReceita', () => Serenity.IntegerEditor],
        ['Titulo', () => Serenity.StringEditor],
        ['Descricao', () => Serenity.StringEditor],
        ['DataRecebimento', () => Serenity.DateEditor],
        ['DataCriacao', () => Serenity.DateEditor],
        ['IsFixo', () => Serenity.BooleanEditor],
        ['DataFixaRecebimento', () => Serenity.IntegerEditor],
        ['Valor', () => Serenity.DecimalEditor],
        ['Recebido', () => Serenity.BooleanEditor],
        ['Ativo', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CadReceitaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}