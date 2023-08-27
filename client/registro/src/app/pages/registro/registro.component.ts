import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  conhecimentos = new FormControl();
  //Array para selecionar os tipos de conhecimento
  tiposDeConhecimento: string[] = ['Git', 'React', 'PHP', 'NodeJS', 'DevOps', 'Banco de Dados', 'TypeScript'];

  selecao: any;

  //função para desativar campos não marcados
  desativarNaoMarcados() {
    this.selecao = this.conhecimentos.value;
    this.conhecimentos.setValue(this.selecao);
  }
  check(value: any) {
    if (this.selecao.includes(value)) {
      return false;
    }
    else {
      return true;
    }
  }

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]], 
      conhecimentosLista: [Validators.required]
    })
    
  }

}
