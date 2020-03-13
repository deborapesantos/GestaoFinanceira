namespace WebMyMoney.Default {
    export interface CadParticipanteRow {
        CadParticipanteId?: number;
        CadGrupoFamiliarId?: number;
        NomeRazaoSocial?: string;
        CpfCnpj?: string;
        Ativo?: boolean;
        CadGrupoFamiliarCadAssinanteId?: number;
        CadGrupoFamiliarAtivo?: boolean;
        CadGrupoFamiliarDataCriacao?: string;
        CadGrupoFamiliarCodigoAcesso?: string;
        CadGrupoFamiliarQdteUsuarios?: number;
    }

    export namespace CadParticipanteRow {
        export const idProperty = 'CadParticipanteId';
        export const nameProperty = 'NomeRazaoSocial';
        export const localTextPrefix = 'Default.CadParticipante';
        export const lookupKey = 'Default.CadParticipante';

        export function getLookup(): Q.Lookup<CadParticipanteRow> {
            return Q.getLookup<CadParticipanteRow>('Default.CadParticipante');
        }
        export const deletePermission = 'Usuario:Editar';
        export const insertPermission = 'Usuario:Editar';
        export const readPermission = 'Usuario:Visualizar';
        export const updatePermission = 'Usuario:Editar';

        export declare const enum Fields {
            CadParticipanteId = "CadParticipanteId",
            CadGrupoFamiliarId = "CadGrupoFamiliarId",
            NomeRazaoSocial = "NomeRazaoSocial",
            CpfCnpj = "CpfCnpj",
            Ativo = "Ativo",
            CadGrupoFamiliarCadAssinanteId = "CadGrupoFamiliarCadAssinanteId",
            CadGrupoFamiliarAtivo = "CadGrupoFamiliarAtivo",
            CadGrupoFamiliarDataCriacao = "CadGrupoFamiliarDataCriacao",
            CadGrupoFamiliarCodigoAcesso = "CadGrupoFamiliarCodigoAcesso",
            CadGrupoFamiliarQdteUsuarios = "CadGrupoFamiliarQdteUsuarios"
        }
    }
}

