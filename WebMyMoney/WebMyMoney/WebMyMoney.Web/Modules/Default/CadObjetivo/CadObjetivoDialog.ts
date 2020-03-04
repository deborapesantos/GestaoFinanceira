
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadObjetivoDialog extends Serenity.EntityDialog<CadObjetivoRow, any> {
        protected getFormKey() { return CadObjetivoForm.formKey; }
        protected getIdProperty() { return CadObjetivoRow.idProperty; }
        protected getLocalTextPrefix() { return CadObjetivoRow.localTextPrefix; }
        protected getNameProperty() { return CadObjetivoRow.nameProperty; }
        protected getService() { return CadObjetivoService.baseUrl; }
        protected getDeletePermission() { return CadObjetivoRow.deletePermission; }
        protected getInsertPermission() { return CadObjetivoRow.insertPermission; }
        protected getUpdatePermission() { return CadObjetivoRow.updatePermission; }

        protected form = new CadObjetivoForm(this.idPrefix);

    }
}