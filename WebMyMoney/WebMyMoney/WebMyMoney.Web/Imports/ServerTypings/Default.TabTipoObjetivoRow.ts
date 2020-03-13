namespace WebMyMoney.Default {
    export interface TabTipoObjetivoRow {
        CodigoTabTipoObjetivo?: number;
        Descricao?: string;
    }

    export namespace TabTipoObjetivoRow {
        export const idProperty = 'CodigoTabTipoObjetivo';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoObjetivo';
        export const lookupKey = 'Default.TabTipoObjetivo';

        export function getLookup(): Q.Lookup<TabTipoObjetivoRow> {
            return Q.getLookup<TabTipoObjetivoRow>('Default.TabTipoObjetivo');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodigoTabTipoObjetivo = "CodigoTabTipoObjetivo",
            Descricao = "Descricao"
        }
    }
}

