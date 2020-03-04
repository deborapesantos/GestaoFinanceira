
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadObjetivoGrid extends Serenity.EntityGrid<CadObjetivoRow, any> {
        protected getColumnsKey() { return 'Default.CadObjetivo'; }
        protected getDialogType() { return CadObjetivoDialog; }
        protected getIdProperty() { return CadObjetivoRow.idProperty; }
        protected getInsertPermission() { return CadObjetivoRow.insertPermission; }
        protected getLocalTextPrefix() { return CadObjetivoRow.localTextPrefix; }
        protected getService() { return CadObjetivoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}