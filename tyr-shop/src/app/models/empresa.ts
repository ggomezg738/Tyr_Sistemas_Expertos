export class Empresa {
    _id?: number;
        nombre: string;
        apellido: string;
        correoElectronico: string;
        contrasenia: string;
        direccion: string;
        nombreEmpresa: string;
        industria: string;

        constructor(nombre: string, apellido: string, correoElectronico: string, contrasenia: string, direccion: string,
            nombreEmpresa: string, industria: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.correoElectronico = correoElectronico;
            this.contrasenia = contrasenia;
            this.direccion = direccion;
            this.nombreEmpresa = nombreEmpresa;
            this.industria = industria;
        }
}