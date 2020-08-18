import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UsuarioI} from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class AuthService {

  //AUTH_SERVER: string = 'http://localhost:3000/api';
  AUTH_SERVER: string = 'http://backend-taller-web.herokuapp.com/api';
  authSubject = new BehaviorSubject(false);
  helper=new JwtHelperService();
  private token : string;
  constructor( private httpClient: HttpClient) { }

  registro( user: UsuarioI ): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/usuario`, 
    user).pipe(tap( 
      (res:JwtResponseI ) => {
        if (res) {
          this.saveToken(res.token,res.expiresIn);
        }
      }
    ))
  }

  login( user: UsuarioI ): Observable<JwtResponseI> {
    console.log(user)
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user)
    .pipe(tap( 
      (res:JwtResponseI) => {
        if (res) {
          this.saveToken(res.token,res.expiresIn);
        }
      }
    ))
  }

  logout():void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token:string, expiresIn:string) : void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN",expiresIn);
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  loggedIn() {
    const token = localStorage.getItem('ACCESS_TOKEN');
    console.log("Autenticado",!this.helper.isTokenExpired(token));
    return !this.helper.isTokenExpired(token);
  }
 
  getUsuarioLoggeado() {
     return this.helper.decodeToken(this.getToken());
  }
}
