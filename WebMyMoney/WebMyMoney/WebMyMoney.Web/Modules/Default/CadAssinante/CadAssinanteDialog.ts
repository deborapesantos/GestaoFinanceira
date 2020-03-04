
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadAssinanteDialog extends Serenity.EntityDialog<CadAssinanteRow, any> {
        protected getFormKey() { return CadAssinanteForm.formKey; }
        protected getIdProperty() { return CadAssinanteRow.idProperty; }
        protected getLocalTextPrefix() { return CadAssinanteRow.localTextPrefix; }
        protected getNameProperty() { return CadAssinanteRow.nameProperty; }
        protected getService() { return CadAssinanteService.baseUrl; }
        protected getDeletePermission() { return CadAssinanteRow.deletePermission; }
        protected getInsertPermission() { return CadAssinanteRow.insertPermission; }
        protected getUpdatePermission() { return CadAssinanteRow.updatePermission; }

        protected form = new CadAssinanteForm(this.idPrefix);

    }
}