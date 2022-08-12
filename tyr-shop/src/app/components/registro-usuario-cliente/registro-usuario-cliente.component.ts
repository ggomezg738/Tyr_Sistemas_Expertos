import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario-cliente',
  templateUrl: './registro-usuario-cliente.component.html',
  styleUrls: ['./registro-usuario-cliente.component.css']
})
export class RegistroUsuarioClienteComponent implements OnInit {

  clienteForm: FormGroup;


  personas:any = [];
  persona:any = {
    nombre:'',
    apellido:'',
    correoElectronico:'',
    contrasenia:'',
    direccion:''
  }

  constructor(private httpClient:HttpClient, private fb: FormBuilder, 
                    private router: Router) { 
    
      this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      contrasenia: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  
  }

  ngOnInit(): void {
  }

  /*
  guardar(){
    this.httpClient.post('http://localhost:8888/usuarios', this.persona)
    .subscribe(res=>{
        console.log(res);
    });
  }
  */

  guardarCliente(){
    const CLIENTE: Cliente = {
      nombre: this.clienteForm.get('nombre')?.value,
      apellido: this.clienteForm.get('apellido')?.value,
      correoElectronico: this.clienteForm.get('correoElectronico')?.value,
      contrasenia: this.clienteForm.get('contrasenia')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
    }
    
    console.log(CLIENTE);
    this.router.navigate(['/tiendas']);

  }

}
