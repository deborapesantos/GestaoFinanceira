namespace WebMyMoney.Default {
    export interface TabTipoContaRow {
        CodigoTabTipoConta?: number;
        Descricao?: string;
    }

    export namespace TabTipoContaRow {
        export const idProperty = 'CodigoTabTipoConta';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoConta';
        export const lookupKey = 'Default.TabTipoConta';

        export function getLookup(): Q.Lookup<TabTipoContaRow> {
            return Q.getLookup<TabTipoContaRow>('Default.TabTipoConta');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodigoTabTipoConta = "CodigoTabTipoConta",
            Descricao = "Descricao"
        }
    }
}

