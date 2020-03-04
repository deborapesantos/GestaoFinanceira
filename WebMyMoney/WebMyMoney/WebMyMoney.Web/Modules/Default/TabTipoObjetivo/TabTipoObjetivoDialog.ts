
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoObjetivoDialog extends Serenity.EntityDialog<TabTipoObjetivoRow, any> {
        protected getFormKey() { return TabTipoObjetivoForm.formKey; }
        protected getIdProperty() { return TabTipoObjetivoRow.idProperty; }
        protected getLocalTextPrefix() { return TabTipoObjetivoRow.localTextPrefix; }
        protected getNameProperty() { return TabTipoObjetivoRow.nameProperty; }
        protected getService() { return TabTipoObjetivoService.baseUrl; }
        protected getDeletePermission() { return TabTipoObjetivoRow.deletePermission; }
        protected getInsertPermission() { return TabTipoObjetivoRow.insertPermission; }
        protected getUpdatePermission() { return TabTipoObjetivoRow.updatePermission; }

        protected form = new TabTipoObjetivoForm(this.idPrefix);

    }
}