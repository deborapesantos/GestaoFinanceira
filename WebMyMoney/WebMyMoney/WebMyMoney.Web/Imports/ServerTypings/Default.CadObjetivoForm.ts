namespace WebMyMoney.Default {
    export interface CadObjetivoForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoObjetivo: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        ValorFinal: Serenity.DecimalEditor;
        ValorInicial: Serenity.DecimalEditor;
        ValorAtual: Serenity.DecimalEditor;
        DataFinal: Serenity.DateEditor;
        DataInicial: Serenity.DateEditor;
        Ativo: Serenity.BooleanEditor;
    }

    export class CadObjetivoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadObjetivo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CadObjetivoForm.init)  {
                CadObjetivoForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(CadObjetivoForm, [
                    'CadContaId', w0,
                    'CadGrupoFamiliarId', w0,
                    'CadUsuarioId', w0,
                    'CodigoTabTipoObjetivo', w0,
                    'Titulo', w1,
                    'Descricao', w1,
                    'ValorFinal', w2,
                    'ValorInicial', w2,
                    'ValorAtual', w2,
                    'DataFinal', w3,
                    'DataInicial', w3,
                    'Ativo', w4
                ]);
            }
        }
    }
}

