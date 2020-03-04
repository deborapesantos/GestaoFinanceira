
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
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CodigoTabTipoDespesa;
            export declare const Descricao;
            export declare const Icone;
        }

        [
            'CodigoTabTipoDespesa',
            'Descricao',
            'Icone'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}