namespace WebMyMoney.Default {
    export interface CadUsuarioForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        UserId: Serenity.IntegerEditor;
        Nome: Serenity.StringEditor;
        Telefone: Serenity.StringEditor;
        DataCriacao: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    export class CadUsuarioForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadUsuario';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadUsuarioForm.init)  {
                CadUsuarioForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(CadUsuarioForm, [
                    'CadGrupoFamiliarId', w0,
                    'UserId', w0,
                    'Nome', w1,
                    'Telefone', w1,
                    'DataCriacao', w2,
                    'Email', w1,
                    'Ativo', w3
                ]);
            }
        }
    }
}

