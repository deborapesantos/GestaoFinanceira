
namespace WebMyMoney.Default {
    export interface TabTipoObjetivoRow {
        CodigoTabTipoObjetivo?: number;
        Descricao?: string;
    }

    export namespace TabTipoObjetivoRow {
        export const idProperty = 'CodigoTabTipoObjetivo';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoObjetivo';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CodigoTabTipoObjetivo;
            export declare const Descricao;
        }

        [
            'CodigoTabTipoObjetivo',
            'Descricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}