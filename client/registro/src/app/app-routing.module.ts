import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: ':parameter/registrar',
    loadChildren: () =>  import('./pages/registro/registro.module')
    .then(m => m.RegistroModule),
  },
  {
    path: 'registros',
    loadChildren: () =>  import('./pages/registros/registros.module')
    .then(m => m.RegistrosModule)
  },
  {
    path: ':parameter/validar',
    loadChildren: () =>  import('./pages/validar/validar.module')
    .then(m => m.ValidarModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
