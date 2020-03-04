
namespace WebMyMoney.Default {
    export class CadCartaoCreditoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CadCartaoCredito';
    }

    export interface CadCartaoCreditoForm {
        CadContaId: Serenity.IntegerEditor;
        CadGrupoFamiliarId: Serenity.IntegerEditor;
        CadUsuarioId: Serenity.IntegerEditor;
        CodigoTabTipoCartaoCredito: Serenity.IntegerEditor;
        Titulo: Serenity.StringEditor;
        Descricao: Serenity.StringEditor;
        DataPagamentoFatura: Serenity.DateEditor;
        DiaPagarFatura: Serenity.IntegerEditor;
        DataFechamentoFatura: Serenity.DateEditor;
        DiaFecharFatura: Serenity.IntegerEditor;
        ValorLimiteTotal: Serenity.DecimalEditor;
        ValorLimiteAtual: Serenity.DecimalEditor;
        ValorParcialFaturaAtual: Serenity.DecimalEditor;
        Saldo: Serenity.DecimalEditor;
        Ativo: Serenity.BooleanEditor;
    }

    [,
        ['CadContaId', () => Serenity.IntegerEditor],
        ['CadGrupoFamiliarId', () => Serenity.IntegerEditor],
        ['CadUsuarioId', () => Serenity.IntegerEditor],
        ['CodigoTabTipoCartaoCredito', () => Serenity.IntegerEditor],
        ['Titulo', () => Serenity.StringEditor],
        ['Descricao', () => Serenity.StringEditor],
        ['DataPagamentoFatura', () => Serenity.DateEditor],
        ['DiaPagarFatura', () => Serenity.IntegerEditor],
        ['DataFechamentoFatura', () => Serenity.DateEditor],
        ['DiaFecharFatura', () => Serenity.IntegerEditor],
        ['ValorLimiteTotal', () => Serenity.DecimalEditor],
        ['ValorLimiteAtual', () => Serenity.DecimalEditor],
        ['ValorParcialFaturaAtual', () => Serenity.DecimalEditor],
        ['Saldo', () => Serenity.DecimalEditor],
        ['Ativo', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CadCartaoCreditoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}