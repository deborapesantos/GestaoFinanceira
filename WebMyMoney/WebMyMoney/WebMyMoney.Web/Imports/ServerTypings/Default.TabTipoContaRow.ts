
namespace WebMyMoney.Default {
    export interface TabTipoContaRow {
        CodigoTabTipoConta?: number;
        Descricao?: string;
    }

    export namespace TabTipoContaRow {
        export const idProperty = 'CodigoTabTipoConta';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.TabTipoConta';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CodigoTabTipoConta;
            export declare const Descricao;
        }

        [
            'CodigoTabTipoConta',
            'Descricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}