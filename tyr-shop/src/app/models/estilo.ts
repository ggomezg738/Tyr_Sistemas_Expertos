export class Estilo {
    _id?: number;
    tipo: string;
    nombre: string;
    cuerpo: string;

    constructor(tipo: string,nombre: string, cuerpo: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.cuerpo = cuerpo
    }
}