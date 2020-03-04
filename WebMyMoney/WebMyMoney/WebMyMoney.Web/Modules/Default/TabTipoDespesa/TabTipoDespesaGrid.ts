
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoDespesaGrid extends Serenity.EntityGrid<TabTipoDespesaRow, any> {
        protected getColumnsKey() { return 'Default.TabTipoDespesa'; }
        protected getDialogType() { return TabTipoDespesaDialog; }
        protected getIdProperty() { return TabTipoDespesaRow.idProperty; }
        protected getInsertPermission() { return TabTipoDespesaRow.insertPermission; }
        protected getLocalTextPrefix() { return TabTipoDespesaRow.localTextPrefix; }
        protected getService() { return TabTipoDespesaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}