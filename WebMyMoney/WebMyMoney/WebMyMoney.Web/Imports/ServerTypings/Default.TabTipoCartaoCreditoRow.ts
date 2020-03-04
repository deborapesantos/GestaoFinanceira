
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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CodigoTabTipoCartaoCredito;
            export declare const Descricao;
            export declare const Icone;
        }

        [
            'CodigoTabTipoCartaoCredito',
            'Descricao',
            'Icone'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}