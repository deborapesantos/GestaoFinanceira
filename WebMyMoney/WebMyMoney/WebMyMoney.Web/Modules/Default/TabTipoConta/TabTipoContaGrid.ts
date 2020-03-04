
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoContaGrid extends Serenity.EntityGrid<TabTipoContaRow, any> {
        protected getColumnsKey() { return 'Default.TabTipoConta'; }
        protected getDialogType() { return TabTipoContaDialog; }
        protected getIdProperty() { return TabTipoContaRow.idProperty; }
        protected getInsertPermission() { return TabTipoContaRow.insertPermission; }
        protected getLocalTextPrefix() { return TabTipoContaRow.localTextPrefix; }
        protected getService() { return TabTipoContaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}