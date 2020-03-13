namespace WebMyMoney.Default {
    export interface CadAssinanteForm {
        DataCriacao: Serenity.DateEditor;
        Telefone: Serenity.StringEditor;
        UsarioAdminNome: Serenity.StringEditor;
        UsuarioAdminEmail: Serenity.StringEditor;
        Username: Serenity.StringEditor;
        Senha: Serenity.PasswordEditor;
        QdteGrupoFamiliar: Serenity.IntegerEditor;
        Ativo: Serenity.BooleanEditor;
        UsuarioAdminId: Serenity.IntegerEditor;
    }

    export class CadAssinanteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadAssinante';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadAssinanteForm.init)  {
                CadAssinanteForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.PasswordEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(CadAssinanteForm, [
                    'DataCriacao', w0,
                    'Telefone', w1,
                    'UsarioAdminNome', w1,
                    'UsuarioAdminEmail', w1,
                    'Username', w1,
                    'Senha', w2,
                    'QdteGrupoFamiliar', w3,
                    'Ativo', w4,
                    'UsuarioAdminId', w3
                ]);
            }
        }
    }
}

