
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoObjetivoGrid extends Serenity.EntityGrid<TabTipoObjetivoRow, any> {
        protected getColumnsKey() { return 'Default.TabTipoObjetivo'; }
        protected getDialogType() { return TabTipoObjetivoDialog; }
        protected getIdProperty() { return TabTipoObjetivoRow.idProperty; }
        protected getInsertPermission() { return TabTipoObjetivoRow.insertPermission; }
        protected getLocalTextPrefix() { return TabTipoObjetivoRow.localTextPrefix; }
        protected getService() { return TabTipoObjetivoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}