export class Cliente {
        _id?: number;
        nombre: string;
        apellido: string;
        correoElectronico: string;
        contrasenia: string;
        direccion: string;

        constructor(nombre: string, apellido: string, correoElectronico: string, contrasenia: string, direccion: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.correoElectronico = correoElectronico;
            this.contrasenia = contrasenia;
            this.direccion = direccion;
        }
}