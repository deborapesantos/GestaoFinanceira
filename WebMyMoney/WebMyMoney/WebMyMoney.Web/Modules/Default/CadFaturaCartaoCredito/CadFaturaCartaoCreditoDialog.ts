
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadFaturaCartaoCreditoDialog extends Serenity.EntityDialog<CadFaturaCartaoCreditoRow, any> {
        protected getFormKey() { return CadFaturaCartaoCreditoForm.formKey; }
        protected getIdProperty() { return CadFaturaCartaoCreditoRow.idProperty; }
        protected getLocalTextPrefix() { return CadFaturaCartaoCreditoRow.localTextPrefix; }
        protected getService() { return CadFaturaCartaoCreditoService.baseUrl; }
        protected getDeletePermission() { return CadFaturaCartaoCreditoRow.deletePermission; }
        protected getInsertPermission() { return CadFaturaCartaoCreditoRow.insertPermission; }
        protected getUpdatePermission() { return CadFaturaCartaoCreditoRow.updatePermission; }

        protected form = new CadFaturaCartaoCreditoForm(this.idPrefix);

    }
}