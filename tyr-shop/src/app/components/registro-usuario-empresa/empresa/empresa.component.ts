import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpClientModule} from '@angular/common/http';
import { AbstractControl,FormBuilder, FormControlName, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  archivoForm: FormGroup;
  SERVER_URL="http://localhost:8888/upload";

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.archivoForm = this.fb.group({
      nombre: ['', Validators.required],
      archivo: ['', Validators.required],
      tipoArchivo: ['', Validators.required],
      
    })
   }

   onFileSelect(event : any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.archivoForm?.get('archivo')?.setValue(file);
    }
  }

  guardarArchivo() {
    const formData = new FormData();
    formData.append('nombre', this.archivoForm?.get('nombre')?.value);
    formData.append('file', this.archivoForm?.get('archivo')?.value);
    formData.append('tipoArchivo', this.archivoForm?.get('tipoArchivo')?.value);
    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  ngOnInit() {
    this.archivoForm = this.formBuilder.group({
      nombre:[''],
      archivo: [''],
      tipoArchivo:['']
    });
  }

}
