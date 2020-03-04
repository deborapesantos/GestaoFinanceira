
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadCartaoCreditoGrid extends Serenity.EntityGrid<CadCartaoCreditoRow, any> {
        protected getColumnsKey() { return 'Default.CadCartaoCredito'; }
        protected getDialogType() { return CadCartaoCreditoDialog; }
        protected getIdProperty() { return CadCartaoCreditoRow.idProperty; }
        protected getInsertPermission() { return CadCartaoCreditoRow.insertPermission; }
        protected getLocalTextPrefix() { return CadCartaoCreditoRow.localTextPrefix; }
        protected getService() { return CadCartaoCreditoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}