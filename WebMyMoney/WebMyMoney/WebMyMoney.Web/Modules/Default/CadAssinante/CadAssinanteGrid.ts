
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadAssinanteGrid extends Serenity.EntityGrid<CadAssinanteRow, any> {
        protected getColumnsKey() { return 'Default.CadAssinante'; }
        protected getDialogType() { return CadAssinanteDialog; }
        protected getIdProperty() { return CadAssinanteRow.idProperty; }
        protected getInsertPermission() { return CadAssinanteRow.insertPermission; }
        protected getLocalTextPrefix() { return CadAssinanteRow.localTextPrefix; }
        protected getService() { return CadAssinanteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}