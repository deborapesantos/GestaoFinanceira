
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class TabTipoCartaoCreditoDialog extends Serenity.EntityDialog<TabTipoCartaoCreditoRow, any> {
        protected getFormKey() { return TabTipoCartaoCreditoForm.formKey; }
        protected getIdProperty() { return TabTipoCartaoCreditoRow.idProperty; }
        protected getLocalTextPrefix() { return TabTipoCartaoCreditoRow.localTextPrefix; }
        protected getNameProperty() { return TabTipoCartaoCreditoRow.nameProperty; }
        protected getService() { return TabTipoCartaoCreditoService.baseUrl; }
        protected getDeletePermission() { return TabTipoCartaoCreditoRow.deletePermission; }
        protected getInsertPermission() { return TabTipoCartaoCreditoRow.insertPermission; }
        protected getUpdatePermission() { return TabTipoCartaoCreditoRow.updatePermission; }

        protected form = new TabTipoCartaoCreditoForm(this.idPrefix);

    }
}