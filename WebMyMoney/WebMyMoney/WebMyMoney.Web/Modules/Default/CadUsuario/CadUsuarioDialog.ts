
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadUsuarioDialog extends Serenity.EntityDialog<CadUsuarioRow, any> {
        protected getFormKey() { return CadUsuarioForm.formKey; }
        protected getIdProperty() { return CadUsuarioRow.idProperty; }
        protected getLocalTextPrefix() { return CadUsuarioRow.localTextPrefix; }
        protected getNameProperty() { return CadUsuarioRow.nameProperty; }
        protected getService() { return CadUsuarioService.baseUrl; }
        protected getDeletePermission() { return CadUsuarioRow.deletePermission; }
        protected getInsertPermission() { return CadUsuarioRow.insertPermission; }
        protected getUpdatePermission() { return CadUsuarioRow.updatePermission; }

        protected form = new CadUsuarioForm(this.idPrefix);

    }
}