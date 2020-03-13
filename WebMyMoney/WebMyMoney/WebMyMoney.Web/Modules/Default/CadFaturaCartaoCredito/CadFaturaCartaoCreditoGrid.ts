
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadFaturaCartaoCreditoGrid extends Serenity.EntityGrid<CadFaturaCartaoCreditoRow, any> {
        protected getColumnsKey() { return 'Default.CadFaturaCartaoCredito'; }
        protected getDialogType() { return CadFaturaCartaoCreditoDialog; }
        protected getIdProperty() { return CadFaturaCartaoCreditoRow.idProperty; }
        protected getInsertPermission() { return CadFaturaCartaoCreditoRow.insertPermission; }
        protected getLocalTextPrefix() { return CadFaturaCartaoCreditoRow.localTextPrefix; }
        protected getService() { return CadFaturaCartaoCreditoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}