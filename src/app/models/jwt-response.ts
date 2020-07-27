export interface JwtResponseI {
    usuario: {
        id: number,
        nombre:string,
        apellido:string,
        direcicon:string,
        telefono:string,
        email:string,
        token:string,
        expiresIn:string
    }
}
