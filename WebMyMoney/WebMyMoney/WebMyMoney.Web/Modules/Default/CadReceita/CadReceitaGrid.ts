
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadReceitaGrid extends Serenity.EntityGrid<CadReceitaRow, any> {
        protected getColumnsKey() { return 'Default.CadReceita'; }
        protected getDialogType() { return CadReceitaDialog; }
        protected getIdProperty() { return CadReceitaRow.idProperty; }
        protected getInsertPermission() { return CadReceitaRow.insertPermission; }
        protected getLocalTextPrefix() { return CadReceitaRow.localTextPrefix; }
        protected getService() { return CadReceitaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}