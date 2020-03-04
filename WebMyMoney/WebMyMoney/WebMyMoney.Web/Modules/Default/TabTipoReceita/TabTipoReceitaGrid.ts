
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoReceitaGrid extends Serenity.EntityGrid<TabTipoReceitaRow, any> {
        protected getColumnsKey() { return 'Default.TabTipoReceita'; }
        protected getDialogType() { return TabTipoReceitaDialog; }
        protected getIdProperty() { return TabTipoReceitaRow.idProperty; }
        protected getInsertPermission() { return TabTipoReceitaRow.insertPermission; }
        protected getLocalTextPrefix() { return TabTipoReceitaRow.localTextPrefix; }
        protected getService() { return TabTipoReceitaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}