
namespace WebMyMoney.Default {
    export class CadAssinanteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadAssinante';
    }

    export interface CadAssinanteForm {
        DataCriacao: Serenity.DateEditor;
        UsuarioAdminId: Serenity.IntegerEditor;
        UsarioAdminNome: Serenity.StringEditor;
        UsuarioAdminEmail: Serenity.StringEditor;
        QdteGrupoFamiliar: Serenity.IntegerEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [,
        ['DataCriacao', () => Serenity.DateEditor],
        ['UsuarioAdminId', () => Serenity.IntegerEditor],
        ['UsarioAdminNome', () => Serenity.StringEditor],
        ['UsuarioAdminEmail', () => Serenity.StringEditor],
        ['QdteGrupoFamiliar', () => Serenity.IntegerEditor],
        ['Ativo', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CadAssinanteForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}