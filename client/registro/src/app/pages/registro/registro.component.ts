import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms'

interface Conhecimento {
  id: any;
  nome: string;
  selected: boolean;
  disabled: boolean;
  listaConhecimento?: Conhecimento[];
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({    });
   
  }
  //Array para criação dos checkboxs
  conhecimentos: Conhecimento = {
    id: 0,
    nome: 'Lista Dinamica',
    selected: false,
    disabled: false,
    listaConhecimento: [
      {id: 0, nome: 'Git', selected: false, disabled: false },
      {id: 1, nome: 'React', selected: false, disabled: false },
      {id: 2, nome: 'PHP', selected: false, disabled: false },
      {id: 3, nome: 'NodeJS', selected: false, disabled: false },
      {id: 4, nome: 'DevOps', selected: false, disabled: false },
      {id: 5, nome: 'Banco de Dados', selected: false, disabled: false },
      {id: 6, nome: 'TypeScript', selected: false, disabled: false }
    ]
};

  ngOnInit(): void {
      
    this.form = this.formBuilder.group({

      nome: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      celular: [Validators.minLength(0)]
  })
}


      
  onSubmit() {
    let itens = getItensSelecionados();
    
    if(!validarCheckbox(itens)){
      return;
    }

    if (this.form.valid) {
      console.log(this.form.value)
      console.log(this.form.value + itens);
    } 
  }

}


//função para pegar os itens selecionados
function getItensSelecionados() {
  const items = document.getElementById('listaCheckbox').getElementsByTagName('input');
 const itensSelecionados = [];
  
  for (let i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox' && items[i].checked == true)
   itensSelecionados.push(items[i].value);
  }

  const item = itensSelecionados.toString();
  console.log(item)
  return JSON.parse(item);



}

  //validar checkbox
function validarCheckbox(itensSelecionados) {
  if(itensSelecionados.length < 1){
    alert('Tem que ser marcado pelo menos um Conhecimento');
    return false;
  } else if(itensSelecionados.length > 3){
    alert('Não é possível marcar mais de 3 conhecimentos');
    return false;
  }else{
    return true;
  }
}