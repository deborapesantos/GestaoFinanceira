
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadReceitaDialog extends Serenity.EntityDialog<CadReceitaRow, any> {
        protected getFormKey() { return CadReceitaForm.formKey; }
        protected getIdProperty() { return CadReceitaRow.idProperty; }
        protected getLocalTextPrefix() { return CadReceitaRow.localTextPrefix; }
        protected getNameProperty() { return CadReceitaRow.nameProperty; }
        protected getService() { return CadReceitaService.baseUrl; }
        protected getDeletePermission() { return CadReceitaRow.deletePermission; }
        protected getInsertPermission() { return CadReceitaRow.insertPermission; }
        protected getUpdatePermission() { return CadReceitaRow.updatePermission; }

        protected form = new CadReceitaForm(this.idPrefix);

    }
}