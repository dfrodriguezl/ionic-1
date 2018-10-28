import { Component } from '@angular/core';
import { NavController,AlertController, ToastController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';
import { TareaHttpProvider } from '../../providers/tarea-http/tarea-http';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas=[];
  tareasArchivadas = [];

  constructor(
    public navCtrl: NavController,
    public alerta: AlertController,
    private servicioTareas: TareaProvider,
    private tareaHttp: TareaHttpProvider,
    private toast:ToastController) {

      // this.tareas = servicioTareas.obtenerTareas();
      
      

  }

  ionViewDidLoad(){
    this.tareaHttp.obtenerTareas().subscribe(
      (datos:any) => {
        this.tareas = datos;
      }
    );
  }

  agregarTarea(){
    let alert = this.alerta.create({
      title: "Agregar Tarea",
      message: "tarea.....",
      inputs: [{
        type: "text",
        name: "textoTarea"
      }],
      buttons: [{
        text: "Cancelar"
      },
    {
      text: "Agregar",
      handler: (dato) => {
        console.log(dato);
        // this.tareas.push(dato.textoTarea);
        // this.servicioTareas.agregarTarea(dato.textoTarea);
        this.tareaHttp.AgregarTarea(dato.textoTarea).subscribe(
          datos => {
            this.tareas.push(datos);
          }
        )
      }
    }]
    });
    alert.present();
  }

  irPaginaArchivadas(){
    this.navCtrl.push(TareasArchivadasPage);
  }

  editarTarea(indice){
    let alert = this.alerta.create({
      title: "Editar tarea",
      inputs: [{
        type: "text",
        name: "textoTarea",
        value: this.tareas[indice].titulo
      }],
      buttons: [{
        text: "Guardar",
        handler: (datos) => {
          // this.servicioTareas.editarTarea(datos.textoTarea, indice);
          let id = this.tareas[indice].id;
          this.tareaHttp.EditarTarea(id,datos.textoTarea).subscribe(
            datos => {
              this.tareas[indice] = datos;
          let toast = this.toast.create({
            message: "Tarea editada exitosamente",
            duration: 2000
          });

          
          toast.present();
          // console.log(datos);
            }
          );
          
        }
      }]
    });
    alert.present();
  }

  archivarTarea(indice){
    // this.servicioTareas.archivarTarea(indice);
    let id = this.tareas[indice].id;
    this.tareaHttp.BorrarTarea(id).subscribe(
      datos => {
        console.log(datos);
        this.tareas.splice(indice,1);
      }
    );
    
  }

  cerrarSesion(){
    localStorage.removeItem('jwt');
    this.navCtrl.setRoot(LoginPage);
  }


  

}
