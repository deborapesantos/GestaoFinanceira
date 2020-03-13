namespace WebMyMoney.Default {
    export interface TabTipoDespesaRow {
        CodigoTabTipoDespesa?: number;
        Descricao?: string;
        Icone?: string;
    }

    export namespace TabTipoDespesaRow {
        export const idProperty = 'CodigoTabTipoDespesa';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoDespesa';
        export const lookupKey = 'Default.TabTipoDespesa';

        export function getLookup(): Q.Lookup<TabTipoDespesaRow> {
            return Q.getLookup<TabTipoDespesaRow>('Default.TabTipoDespesa');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodigoTabTipoDespesa = "CodigoTabTipoDespesa",
            Descricao = "Descricao",
            Icone = "Icone"
        }
    }
}

