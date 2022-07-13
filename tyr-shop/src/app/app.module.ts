import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador/administrador.component';
import { EleccionComponent } from './components/eleccion/eleccion.component';
import { RegistroUsuarioClienteComponent } from './components/registro-usuario-cliente/registro-usuario-cliente.component';
import { RegistroUsuarioEmpresaComponent } from './components/registro-usuario-empresa/registro-usuario-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    AdministradorComponent,
    EleccionComponent,
    RegistroUsuarioClienteComponent,
    RegistroUsuarioEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
