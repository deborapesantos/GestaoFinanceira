namespace WebMyMoney.Default {
    export interface CadGrupoFamiliarForm {
        CadAssinanteId: Serenity.IntegerEditor;
        Ativo: Serenity.BooleanEditor;
        DataCriacao: Serenity.DateEditor;
        CodigoAcesso: Serenity.StringEditor;
        QdteUsuarios: Serenity.IntegerEditor;
    }

    export class CadGrupoFamiliarForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadGrupoFamiliar';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadGrupoFamiliarForm.init)  {
                CadGrupoFamiliarForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(CadGrupoFamiliarForm, [
                    'CadAssinanteId', w0,
                    'Ativo', w1,
                    'DataCriacao', w2,
                    'CodigoAcesso', w3,
                    'QdteUsuarios', w0
                ]);
            }
        }
    }
}

