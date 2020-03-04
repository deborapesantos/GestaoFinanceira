
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoContaDialog extends Serenity.EntityDialog<TabTipoContaRow, any> {
        protected getFormKey() { return TabTipoContaForm.formKey; }
        protected getIdProperty() { return TabTipoContaRow.idProperty; }
        protected getLocalTextPrefix() { return TabTipoContaRow.localTextPrefix; }
        protected getNameProperty() { return TabTipoContaRow.nameProperty; }
        protected getService() { return TabTipoContaService.baseUrl; }
        protected getDeletePermission() { return TabTipoContaRow.deletePermission; }
        protected getInsertPermission() { return TabTipoContaRow.insertPermission; }
        protected getUpdatePermission() { return TabTipoContaRow.updatePermission; }

        protected form = new TabTipoContaForm(this.idPrefix);

    }
}