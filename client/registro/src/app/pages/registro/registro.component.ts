import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  //Array para selecionar os tipos de conhecimento
  tiposDeConhecimento: string[] = ['Git', 'React', 'PHP', 'NODEJS', 'DevOps', 'Banco de Dados', 'TypeScript'];

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

}
