import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-registro-usuario-empresa',
  templateUrl: './registro-usuario-empresa.component.html',
  styleUrls: ['./registro-usuario-empresa.component.css']
})
export class RegistroUsuarioEmpresaComponent implements OnInit {

  empresaForm: FormGroup;

  constructor(private httpClient:HttpClient, private fb: FormBuilder, 
    private router: Router) { 
      this.empresaForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        correoElectronico: ['', Validators.required],
        contrasenia: ['', Validators.required],
        direccion: ['', Validators.required],
        nombreEmpresa: ['', Validators.required],
        industria: ['', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  guardarEmpresa(){
    const EMPRESA: Empresa = {
      nombre: this.empresaForm.get('nombre')?.value,
      apellido: this.empresaForm.get('apellido')?.value,
      correoElectronico: this.empresaForm.get('correoElectronico')?.value,
      contrasenia: this.empresaForm.get('contrasenia')?.value,
      direccion: this.empresaForm.get('direccion')?.value,
      nombreEmpresa: this.empresaForm.get('nombreEmpresa')?.value,
      industria: this.empresaForm.get('industria')?.value,
    }
    
    this.httpClient.post('http://localhost:8888/guardarEmpresa', EMPRESA)
    .subscribe(res=>{
        console.log(res)});
    this.router.navigate(['/personalizacionPlantilla']);
    
  }

}
