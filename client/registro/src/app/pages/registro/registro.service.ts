import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) {    }
  
  public sendPost(data){
    return this.http.post('http://localhost:3000/registrar/',  data);
   }
}
