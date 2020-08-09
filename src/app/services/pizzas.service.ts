import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Pizzas} from './../models/pizzas-response';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  AUTH_SERVER: string = 'http://localhost:3000/api';
  authSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  getPizzas(): Observable<Pizzas> {

    
    return this.httpClient.get(`${this.AUTH_SERVER}/pizzas`, {}).pipe(tap( 
      (res:Pizzas ) => {
        if (res) {
           console.log(res);
        }
      }, 
      (err) => {
        console.log("Ocurrio error al al obtener pedidos",err);
  
      }
    ))
  }
}

