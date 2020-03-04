
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadContaGrid extends Serenity.EntityGrid<CadContaRow, any> {
        protected getColumnsKey() { return 'Default.CadConta'; }
        protected getDialogType() { return CadContaDialog; }
        protected getIdProperty() { return CadContaRow.idProperty; }
        protected getInsertPermission() { return CadContaRow.insertPermission; }
        protected getLocalTextPrefix() { return CadContaRow.localTextPrefix; }
        protected getService() { return CadContaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}