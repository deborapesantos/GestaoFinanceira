
namespace WebMyMoney.Default {
    export interface UserPermissionsRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
    }

    export namespace UserPermissionsRow {
        export const idProperty = 'UserPermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Default.UserPermissions';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserPermissionId;
            export declare const UserId;
            export declare const PermissionKey;
            export declare const Granted;
        }

        [
            'UserPermissionId',
            'UserId',
            'PermissionKey',
            'Granted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}