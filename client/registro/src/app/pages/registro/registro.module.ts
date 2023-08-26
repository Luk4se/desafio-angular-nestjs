import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms'
import {FormControl} from '@angular/forms'
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';

import {NgxMaskModule} from 'ngx-mask'

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent
  }
]


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    //importação de modulos para estilo do formulário de cadastro
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    NgxMaskModule.forRoot(),
  ]
})
export class RegistroModule {

 }


