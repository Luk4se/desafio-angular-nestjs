import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarComponent } from './validar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component:ValidarComponent
  }
]

@NgModule({
  declarations: [
    ValidarComponent
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
export class ValidarModule { }
