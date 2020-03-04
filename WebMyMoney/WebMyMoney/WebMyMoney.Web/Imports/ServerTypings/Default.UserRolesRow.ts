
namespace WebMyMoney.Default {
    export interface UserRolesRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
    }

    export namespace UserRolesRow {
        export const idProperty = 'UserRoleId';
        export const localTextPrefix = 'Default.UserRoles';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserRoleId;
            export declare const UserId;
            export declare const RoleId;
        }

        [
            'UserRoleId',
            'UserId',
            'RoleId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}