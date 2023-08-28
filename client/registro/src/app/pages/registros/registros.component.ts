import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import _, { map } from 'underscore';



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
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {
  //colunas da tabela
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'celular', 'conhecimento', 'validacao'];
  //dados da tabela
  dataSource: any
  
 constructor(private router: Router, private http: HttpClient) { }
  
 ngOnInit(): void {
  
  //GET para o servidor
   this.http.get<Colaboradores[]>('http://localhost:3000/registrar').subscribe(colaboradores => {
    console.log(colaboradores)
    this.dataSource = new MatTableDataSource(_.sortBy(colaboradores, 'nome') )
   })
  }
  

  //filtro da tabela
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

//redirecionar para a validação do colaborador
public editColaborador(element) {
  console.log(element)
  this.http.get<Colaboradores>(`http://localhost:3000/registrar/${Number(element.id)}`).subscribe(colaboradores => {
    this.router.navigateByUrl(`${colaboradores.nome}/${'validar'}?id=${element.id}`);
    return element
   })
}
}
