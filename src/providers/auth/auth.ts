import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.url = localStorage.getItem('url');
  }

  login(usuario){
    return this.http.post(this.url + 'usuario_token',{
      auth: usuario
    })
  }

  crearUsuario(email,password){
    return this.http.post(this.url + 'usuarios',{
      usuario:{
        email: email,
        password: password
      }
    });
  }

}
