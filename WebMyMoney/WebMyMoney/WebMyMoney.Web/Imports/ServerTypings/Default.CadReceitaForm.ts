namespace WebMyMoney.Default {
    export interface CadReceitaForm {
        CadGrupoFamiliarId: Serenity.LookupEditor;
        CadContaId: Serenity.LookupEditor;
        CadUsuarioId: Serenity.LookupEditor;
        CodigoTabTipoReceita: Serenity.LookupEditor;
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

    export class CadReceitaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadReceita';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadReceitaForm.init)  {
                CadReceitaForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(CadReceitaForm, [
                    'CadGrupoFamiliarId', w0,
                    'CadContaId', w0,
                    'CadUsuarioId', w0,
                    'CodigoTabTipoReceita', w0,
                    'Titulo', w1,
                    'Descricao', w1,
                    'DataRecebimento', w2,
                    'DataCriacao', w2,
                    'IsFixo', w3,
                    'DataFixaRecebimento', w4,
                    'Valor', w5,
                    'Recebido', w3,
                    'Ativo', w3
                ]);
            }
        }
    }
}

