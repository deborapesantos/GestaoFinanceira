
namespace WebMyMoney.Default {
    export interface UsersRow {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        Email?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        LastDirectoryUpdate?: string;
        UserImage?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        UsuarioId?: number;
    }

    export namespace UsersRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Default.Users';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserId;
            export declare const Username;
            export declare const DisplayName;
            export declare const Email;
            export declare const Source;
            export declare const PasswordHash;
            export declare const PasswordSalt;
            export declare const LastDirectoryUpdate;
            export declare const UserImage;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const IsActive;
            export declare const UsuarioId;
        }

        [
            'UserId',
            'Username',
            'DisplayName',
            'Email',
            'Source',
            'PasswordHash',
            'PasswordSalt',
            'LastDirectoryUpdate',
            'UserImage',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'IsActive',
            'UsuarioId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}