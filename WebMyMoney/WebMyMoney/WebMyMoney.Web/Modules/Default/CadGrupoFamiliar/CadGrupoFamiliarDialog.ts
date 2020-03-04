
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadGrupoFamiliarDialog extends Serenity.EntityDialog<CadGrupoFamiliarRow, any> {
        protected getFormKey() { return CadGrupoFamiliarForm.formKey; }
        protected getIdProperty() { return CadGrupoFamiliarRow.idProperty; }
        protected getLocalTextPrefix() { return CadGrupoFamiliarRow.localTextPrefix; }
        protected getNameProperty() { return CadGrupoFamiliarRow.nameProperty; }
        protected getService() { return CadGrupoFamiliarService.baseUrl; }
        protected getDeletePermission() { return CadGrupoFamiliarRow.deletePermission; }
        protected getInsertPermission() { return CadGrupoFamiliarRow.insertPermission; }
        protected getUpdatePermission() { return CadGrupoFamiliarRow.updatePermission; }

        protected form = new CadGrupoFamiliarForm(this.idPrefix);

    }
}