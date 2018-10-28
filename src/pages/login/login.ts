import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario = {
    email: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.usuario.email && this.usuario.password){
      this.authProvider.login(this.usuario).subscribe(
        (datos:any) => {
          localStorage.setItem('jwt',datos.jwt);
          this.navCtrl.setRoot(HomePage);
        }
      );
    }
  }

  irPaginaRegistro(){
    this.navCtrl.push(RegistroPage);
  }

}
