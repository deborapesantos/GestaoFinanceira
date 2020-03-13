namespace WebMyMoney.Default {
    export interface CadParticipanteForm {
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        NomeRazaoSocial: Serenity.StringEditor;
        CpfCnpj: Serenity.StringEditor;
        Ativo: Serenity.BooleanEditor;
    }

    export class CadParticipanteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadParticipante';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadParticipanteForm.init)  {
                CadParticipanteForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(CadParticipanteForm, [
                    'CadGrupoFamiliarId', w0,
                    'NomeRazaoSocial', w1,
                    'CpfCnpj', w1,
                    'Ativo', w2
                ]);
            }
        }
    }
}

