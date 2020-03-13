
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadParticipanteDialog extends Serenity.EntityDialog<CadParticipanteRow, any> {
        protected getFormKey() { return CadParticipanteForm.formKey; }
        protected getIdProperty() { return CadParticipanteRow.idProperty; }
        protected getLocalTextPrefix() { return CadParticipanteRow.localTextPrefix; }
        protected getNameProperty() { return CadParticipanteRow.nameProperty; }
        protected getService() { return CadParticipanteService.baseUrl; }
        protected getDeletePermission() { return CadParticipanteRow.deletePermission; }
        protected getInsertPermission() { return CadParticipanteRow.insertPermission; }
        protected getUpdatePermission() { return CadParticipanteRow.updatePermission; }

        protected form = new CadParticipanteForm(this.idPrefix);

    }
}