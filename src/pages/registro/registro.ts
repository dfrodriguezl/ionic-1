import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario = {
    email: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  crearUsuario() {
    if (this.usuario.email && this.usuario.password) {
      this.authProvider.crearUsuario(this.usuario.email, this.usuario.password).subscribe(
        (datos:any) => {
          console.log(this.usuario);
          this.authProvider.login(this.usuario).subscribe((datos:any) => {
            console.log(datos);
            localStorage.setItem('jwt',datos.jwt);
            this.navCtrl.setRoot(HomePage);
          })
          
        }
      );
    }
  }
}
