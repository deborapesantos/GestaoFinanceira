
namespace WebMyMoney.Default {
    export class CadGrupoFamiliarForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadGrupoFamiliar';
    }

    export interface CadGrupoFamiliarForm {
        CadAssinanteId: Serenity.IntegerEditor;
        Ativo: Serenity.BooleanEditor;
        DataCriacao: Serenity.DateEditor;
        CodigoAcesso: Serenity.StringEditor;
        QdteUsuarios: Serenity.IntegerEditor;
    }

    [,
        ['CadAssinanteId', () => Serenity.IntegerEditor],
        ['Ativo', () => Serenity.BooleanEditor],
        ['DataCriacao', () => Serenity.DateEditor],
        ['CodigoAcesso', () => Serenity.StringEditor],
        ['QdteUsuarios', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CadGrupoFamiliarForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}