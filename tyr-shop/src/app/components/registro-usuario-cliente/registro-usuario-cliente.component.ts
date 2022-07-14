import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-usuario-cliente',
  templateUrl: './registro-usuario-cliente.component.html',
  styleUrls: ['./registro-usuario-cliente.component.css']
})
export class RegistroUsuarioClienteComponent implements OnInit {

  personas:any = [];
  persona:any = {
    nombre:'',
    apellido:'',
    correoElectronico:'',
    contrasenia:'',
    direccion:''
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  guardar(){
    this.httpClient.post('http://localhost:8888/usuarios', this.persona)
    .subscribe(res=>{
        console.log(res);
    });
  }

}
