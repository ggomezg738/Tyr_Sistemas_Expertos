import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EleccionComponent } from './components/eleccion/eleccion.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { CestaDeCompraComponent } from './components/registro-usuario-cliente/cesta-de-compra/cesta-de-compra.component';
import { RegistroUsuarioClienteComponent } from './components/registro-usuario-cliente/registro-usuario-cliente.component';
import { VisualizacionDeEmpresasComponent } from './components/registro-usuario-cliente/visualizacion-de-empresas/visualizacion-de-empresas.component';
import { EmpresaComponent } from './components/registro-usuario-empresa/empresa/empresa.component';
import { RegistroUsuarioEmpresaComponent } from './components/registro-usuario-empresa/registro-usuario-empresa.component';
const routes: Routes = [
  {
    path:'', 
    component:LandingPageComponent
  },
  {
    path:'registro', 
    component:EleccionComponent
  },
  {
    path:'registroCliente',
    component:RegistroUsuarioClienteComponent
  },
  {
    path:'registroEmpresa',
    component:RegistroUsuarioEmpresaComponent
  },
  {
    path:'cestaCompra',
    component:CestaDeCompraComponent
  },
  {
    path:'tiendas',
    component:VisualizacionDeEmpresasComponent
  },
  {
    path:'personalizacionPlantilla',
    component:EmpresaComponent
  },
  {
    path:'inicioSesion',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
