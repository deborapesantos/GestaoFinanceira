
namespace WebMyMoney.Default {
    export interface RolePermissionsRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
    }

    export namespace RolePermissionsRow {
        export const idProperty = 'RolePermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Default.RolePermissions';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const RolePermissionId;
            export declare const RoleId;
            export declare const PermissionKey;
        }

        [
            'RolePermissionId',
            'RoleId',
            'PermissionKey'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}