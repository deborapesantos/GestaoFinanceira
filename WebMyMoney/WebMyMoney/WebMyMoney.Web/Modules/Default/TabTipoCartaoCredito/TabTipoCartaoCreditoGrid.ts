
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoCartaoCreditoGrid extends Serenity.EntityGrid<TabTipoCartaoCreditoRow, any> {
        protected getColumnsKey() { return 'Default.TabTipoCartaoCredito'; }
        protected getDialogType() { return TabTipoCartaoCreditoDialog; }
        protected getIdProperty() { return TabTipoCartaoCreditoRow.idProperty; }
        protected getInsertPermission() { return TabTipoCartaoCreditoRow.insertPermission; }
        protected getLocalTextPrefix() { return TabTipoCartaoCreditoRow.localTextPrefix; }
        protected getService() { return TabTipoCartaoCreditoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}