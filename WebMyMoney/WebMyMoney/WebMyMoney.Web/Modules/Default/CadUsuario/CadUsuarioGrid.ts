
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadUsuarioGrid extends Serenity.EntityGrid<CadUsuarioRow, any> {
        protected getColumnsKey() { return 'Default.CadUsuario'; }
        protected getDialogType() { return CadUsuarioDialog; }
        protected getIdProperty() { return CadUsuarioRow.idProperty; }
        protected getInsertPermission() { return CadUsuarioRow.insertPermission; }
        protected getLocalTextPrefix() { return CadUsuarioRow.localTextPrefix; }
        protected getService() { return CadUsuarioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}