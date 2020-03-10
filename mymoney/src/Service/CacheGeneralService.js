export class CacheGeneralService{

    CadUsuarioRow = null;
    
    constructor(CadUsuarioRow){
        this.CadUsuarioRow = CadUsuarioRow;
    }
    getCadUsuario() {
       return CadUsuarioRow;
    }

    setCadUsuario(model) {
        this.CadUsuarioRow = model;
        return CadUsuarioRow;
    }

}