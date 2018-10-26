import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TareaHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaHttpProvider {
  url = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
    console.log('Hello TareaHttpProvider Provider');
  }

  obtenerTareas(){
    return this.http.get(this.url + 'tareas');    
  }

  AgregarTarea(tarea){
    return this.http.post(this.url + 'tareas',{ tarea : { titulo: tarea, finalizada: false}});
  }

  obtenerTarea(id){
    return this.http.get(this.url + 'tareas/' + id);    
  }

  BorrarTarea(id){
    return this.http.delete(this.url + 'tareas/' + id);
  }

  EditarTarea(id,titulo){
    return this.http.put(this.url + 'tareas/' + id,{ tarea : { titulo: titulo, finalizada: false}});
  }

}
