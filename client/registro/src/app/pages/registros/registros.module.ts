import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './registros.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component:RegistrosComponent
  }
]

@NgModule({
  declarations: [
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,

    //Modulo HTTP
    HttpClientModule
    ],
    providers: [ HttpClientModule]
})
export class RegistrosModule { }
