
namespace WebMyMoney.Default {
    export class CadUsuarioForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadUsuario';
    }

    export interface CadUsuarioForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        Nome: Serenity.StringEditor;
        Telefone: Serenity.StringEditor;
        DataCriacao: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [,
        ['CadGrupoFamiliarId', () => Serenity.IntegerEditor],
        ['UserId', () => Serenity.IntegerEditor],
        ['Nome', () => Serenity.StringEditor],
        ['Telefone', () => Serenity.StringEditor],
        ['DataCriacao', () => Serenity.DateEditor],
        ['Email', () => Serenity.StringEditor],
        ['Ativo', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CadUsuarioForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}