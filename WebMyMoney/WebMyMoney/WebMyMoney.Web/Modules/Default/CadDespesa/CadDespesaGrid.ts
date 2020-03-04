
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadDespesaGrid extends Serenity.EntityGrid<CadDespesaRow, any> {
        protected getColumnsKey() { return 'Default.CadDespesa'; }
        protected getDialogType() { return CadDespesaDialog; }
        protected getIdProperty() { return CadDespesaRow.idProperty; }
        protected getInsertPermission() { return CadDespesaRow.insertPermission; }
        protected getLocalTextPrefix() { return CadDespesaRow.localTextPrefix; }
        protected getService() { return CadDespesaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}