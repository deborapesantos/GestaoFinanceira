
namespace WebMyMoney.Default {
    export interface TabTipoReceitaRow {
        CodigoTabTipoReceita?: number;
        Descricao?: string;
    }

    export namespace TabTipoReceitaRow {
        export const idProperty = 'CodigoTabTipoReceita';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoReceita';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CodigoTabTipoReceita;
            export declare const Descricao;
        }

        [
            'CodigoTabTipoReceita',
            'Descricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}