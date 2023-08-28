import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface Colaboradores {
  id: string,
  nome: string
  email: string
  cpf: string
  conhecimento: string
  validacao: string,
  dataAlteracao: string,
  celular: string
}

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.scss']
})
export class ValidarComponent implements OnInit {
  //colunas da tabela
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'celular', 'conhecimento', 'validacao'];
  //dados do banco
  dataSource: any

  //Array dos dados do banco
  arrayData: any
  
  idColaborador: any
  

 constructor(private http: HttpClient, private route: ActivatedRoute) { }
  //pegar ID através do parametro da URL
 ngOnInit(): void {
  this.route.queryParams
      .subscribe(params => {
        this.idColaborador = params['id'];
    },)
  
    //buscar colaborador por ID no banco
   this.http.get<Colaboradores[]>(`http://localhost:3000/registrar/${Number(this.idColaborador)}`).subscribe(colaboradores => {
    this.dataSource = new MatTableDataSource(colaboradores)
   })
   
  }
  
}

