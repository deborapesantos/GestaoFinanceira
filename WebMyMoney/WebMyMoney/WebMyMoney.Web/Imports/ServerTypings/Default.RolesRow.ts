
namespace WebMyMoney.Default {
    export interface RolesRow {
        RoleId?: number;
        RoleName?: string;
    }

    export namespace RolesRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Default.Roles';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const RoleId;
            export declare const RoleName;
        }

        [
            'RoleId',
            'RoleName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}