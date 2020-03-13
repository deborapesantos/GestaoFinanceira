namespace WebMyMoney.Default {
    export interface TabTipoCartaoCreditoRow {
        CodigoTabTipoCartaoCredito?: number;
        Descricao?: string;
        Icone?: string;
    }

    export namespace TabTipoCartaoCreditoRow {
        export const idProperty = 'CodigoTabTipoCartaoCredito';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoCartaoCredito';
        export const lookupKey = 'Default.TabTipoCartaoCredito';

        export function getLookup(): Q.Lookup<TabTipoCartaoCreditoRow> {
            return Q.getLookup<TabTipoCartaoCreditoRow>('Default.TabTipoCartaoCredito');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CodigoTabTipoCartaoCredito = "CodigoTabTipoCartaoCredito",
            Descricao = "Descricao",
            Icone = "Icone"
        }
    }
}

