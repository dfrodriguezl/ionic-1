import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {
  tareas = [];
  tareasArchivadas = [];

  constructor() {
    console.log('Hello TareaProvider Provider');
  }

  obtenerTareas(){
    return this.tareas;
  }

  agregarTarea(tarea){
    this.tareas.push(tarea);
  }

  editarTarea(tarea,index){

  }

  archivarTarea(index){
    this.tareasArchivadas.push(this.tareas[index]);
    this.tareas.splice(index,1);
  }

  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }
}
