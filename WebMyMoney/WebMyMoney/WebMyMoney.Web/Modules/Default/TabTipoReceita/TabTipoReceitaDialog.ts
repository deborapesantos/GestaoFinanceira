
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoReceitaDialog extends Serenity.EntityDialog<TabTipoReceitaRow, any> {
        protected getFormKey() { return TabTipoReceitaForm.formKey; }
        protected getIdProperty() { return TabTipoReceitaRow.idProperty; }
        protected getLocalTextPrefix() { return TabTipoReceitaRow.localTextPrefix; }
        protected getNameProperty() { return TabTipoReceitaRow.nameProperty; }
        protected getService() { return TabTipoReceitaService.baseUrl; }
        protected getDeletePermission() { return TabTipoReceitaRow.deletePermission; }
        protected getInsertPermission() { return TabTipoReceitaRow.insertPermission; }
        protected getUpdatePermission() { return TabTipoReceitaRow.updatePermission; }

        protected form = new TabTipoReceitaForm(this.idPrefix);

    }
}