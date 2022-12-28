import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
//http = alias
  constructor(private http:HttpClient) { }

  //Método Observable que devuelve datos
  getDatos():Observable<any>{

    //Retorno de datos utilizando el método get de HttpClient que llama a la base de datos
    return this.http.get('./assets/db/db.json');
    //Acá se podría poner un CallBack para ver la opción de problema de conexión del servidor
  }

}
