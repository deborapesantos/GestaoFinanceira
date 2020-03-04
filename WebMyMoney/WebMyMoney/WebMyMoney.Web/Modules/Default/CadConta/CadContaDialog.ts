
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadContaDialog extends Serenity.EntityDialog<CadContaRow, any> {
        protected getFormKey() { return CadContaForm.formKey; }
        protected getIdProperty() { return CadContaRow.idProperty; }
        protected getLocalTextPrefix() { return CadContaRow.localTextPrefix; }
        protected getNameProperty() { return CadContaRow.nameProperty; }
        protected getService() { return CadContaService.baseUrl; }
        protected getDeletePermission() { return CadContaRow.deletePermission; }
        protected getInsertPermission() { return CadContaRow.insertPermission; }
        protected getUpdatePermission() { return CadContaRow.updatePermission; }

        protected form = new CadContaForm(this.idPrefix);

    }
}