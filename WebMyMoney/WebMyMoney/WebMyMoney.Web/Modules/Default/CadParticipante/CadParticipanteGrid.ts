
namespace WebMyMoney.Default {

    @Serenity.Decorators.registerClass()
    export class CadParticipanteGrid extends Serenity.EntityGrid<CadParticipanteRow, any> {
        protected getColumnsKey() { return 'Default.CadParticipante'; }
        protected getDialogType() { return CadParticipanteDialog; }
        protected getIdProperty() { return CadParticipanteRow.idProperty; }
        protected getInsertPermission() { return CadParticipanteRow.insertPermission; }
        protected getLocalTextPrefix() { return CadParticipanteRow.localTextPrefix; }
        protected getService() { return CadParticipanteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}