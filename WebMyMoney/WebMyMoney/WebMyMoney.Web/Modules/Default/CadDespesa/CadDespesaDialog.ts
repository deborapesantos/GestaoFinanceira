
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadDespesaDialog extends Serenity.EntityDialog<CadDespesaRow, any> {
        protected getFormKey() { return CadDespesaForm.formKey; }
        protected getIdProperty() { return CadDespesaRow.idProperty; }
        protected getLocalTextPrefix() { return CadDespesaRow.localTextPrefix; }
        protected getNameProperty() { return CadDespesaRow.nameProperty; }
        protected getService() { return CadDespesaService.baseUrl; }
        protected getDeletePermission() { return CadDespesaRow.deletePermission; }
        protected getInsertPermission() { return CadDespesaRow.insertPermission; }
        protected getUpdatePermission() { return CadDespesaRow.updatePermission; }

        protected form = new CadDespesaForm(this.idPrefix);

    }
}