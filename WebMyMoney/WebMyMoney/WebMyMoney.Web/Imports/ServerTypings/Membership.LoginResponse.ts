namespace WebMyMoney.Membership {
    export interface LoginResponse extends Serenity.ServiceResponse {
        Usuario?: Default.CadUsuarioRow;
        GrupoFamiliar?: Default.CadGrupoFamiliarRow;
        Sucesso?: boolean;
        Username?: string;
        Senha?: string;
        Mensagem?: string;
        UrlRedirect?: string;
    }
}

