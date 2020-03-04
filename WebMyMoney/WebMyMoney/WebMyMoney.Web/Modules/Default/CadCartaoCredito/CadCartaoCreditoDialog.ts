
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadCartaoCreditoDialog extends Serenity.EntityDialog<CadCartaoCreditoRow, any> {
        protected getFormKey() { return CadCartaoCreditoForm.formKey; }
        protected getIdProperty() { return CadCartaoCreditoRow.idProperty; }
        protected getLocalTextPrefix() { return CadCartaoCreditoRow.localTextPrefix; }
        protected getNameProperty() { return CadCartaoCreditoRow.nameProperty; }
        protected getService() { return CadCartaoCreditoService.baseUrl; }
        protected getDeletePermission() { return CadCartaoCreditoRow.deletePermission; }
        protected getInsertPermission() { return CadCartaoCreditoRow.insertPermission; }
        protected getUpdatePermission() { return CadCartaoCreditoRow.updatePermission; }

        protected form = new CadCartaoCreditoForm(this.idPrefix);

    }
}