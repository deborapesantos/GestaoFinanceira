
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadGrupoFamiliarGrid extends Serenity.EntityGrid<CadGrupoFamiliarRow, any> {
        protected getColumnsKey() { return 'Default.CadGrupoFamiliar'; }
        protected getDialogType() { return CadGrupoFamiliarDialog; }
        protected getIdProperty() { return CadGrupoFamiliarRow.idProperty; }
        protected getInsertPermission() { return CadGrupoFamiliarRow.insertPermission; }
        protected getLocalTextPrefix() { return CadGrupoFamiliarRow.localTextPrefix; }
        protected getService() { return CadGrupoFamiliarService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}