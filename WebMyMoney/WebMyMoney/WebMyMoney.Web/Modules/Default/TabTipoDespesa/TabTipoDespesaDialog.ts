
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoDespesaDialog extends Serenity.EntityDialog<TabTipoDespesaRow, any> {
        protected getFormKey() { return TabTipoDespesaForm.formKey; }
        protected getIdProperty() { return TabTipoDespesaRow.idProperty; }
        protected getLocalTextPrefix() { return TabTipoDespesaRow.localTextPrefix; }
        protected getNameProperty() { return TabTipoDespesaRow.nameProperty; }
        protected getService() { return TabTipoDespesaService.baseUrl; }
        protected getDeletePermission() { return TabTipoDespesaRow.deletePermission; }
        protected getInsertPermission() { return TabTipoDespesaRow.insertPermission; }
        protected getUpdatePermission() { return TabTipoDespesaRow.updatePermission; }

        protected form = new TabTipoDespesaForm(this.idPrefix);

    }
}