namespace WebMyMoney.Default {
    export interface TabTipoReceitaRow {
        CodigoTabTipoReceita?: number;
        Descricao?: string;
    }

    export namespace TabTipoReceitaRow {
        export const idProperty = 'CodigoTabTipoReceita';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoReceita';
        export const lookupKey = 'Default.TabTipoReceita';

        export function getLookup(): Q.Lookup<TabTipoReceitaRow> {
            return Q.getLookup<TabTipoReceitaRow>('Default.TabTipoReceita');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodigoTabTipoReceita = "CodigoTabTipoReceita",
            Descricao = "Descricao"
        }
    }
}

