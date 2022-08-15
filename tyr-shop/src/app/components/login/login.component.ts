import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private httpClient:HttpClient, private fb: FormBuilder, 
    private router: Router) { 
      this.loginForm = this.fb.group({
        correoElectronico: ['', Validators.required],
        contrasenia: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  login(){
    const CLIENTE = {
      correoElectronico: this.loginForm.get('correoElectronico')?.value,
      contrasenia: this.loginForm.get('contrasenia')?.value,
    }
    
    this.httpClient.post('http://localhost:8888/loginUsuario', CLIENTE)
    .subscribe(res=>{
        if(res==404){
          alert("Ha ocurrido un error");
        } else if(res==409){
          alert("El usuario o la contraseña es incorrecta");
        } else {
          alert("Logueado exitoso!!")
          this.router.navigate(['/tiendas']);
        }
          
      });
    
    
  }

}
