import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador/administrador.component';
import { EleccionComponent } from './components/eleccion/eleccion.component';
import { RegistroUsuarioClienteComponent } from './components/registro-usuario-cliente/registro-usuario-cliente.component';
import { RegistroUsuarioEmpresaComponent } from './components/registro-usuario-empresa/registro-usuario-empresa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VisualizacionDeEmpresasComponent } from './components/registro-usuario-cliente/visualizacion-de-empresas/visualizacion-de-empresas.component';
import { VisualizacionDeProductosComponent } from './components/registro-usuario-cliente/visualizacion-de-productos/visualizacion-de-productos.component';
import { CestaDeCompraComponent } from './components/registro-usuario-cliente/cesta-de-compra/cesta-de-compra.component';
import { DescripcionProductoComponent } from './components/registro-usuario-cliente/descripcion-producto/descripcion-producto.component';
import { HistorialDeComprasComponent } from './components/registro-usuario-cliente/historial-de-compras/historial-de-compras.component';
import { EmpresaComponent } from './components/registro-usuario-empresa/empresa/empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    AdministradorComponent,
    EleccionComponent,
    RegistroUsuarioClienteComponent,
    RegistroUsuarioEmpresaComponent,
    VisualizacionDeEmpresasComponent,
    VisualizacionDeProductosComponent,
    CestaDeCompraComponent,
    DescripcionProductoComponent,
    HistorialDeComprasComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
