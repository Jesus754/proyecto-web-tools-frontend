import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioI } from '../models/user';
import { Pedidos } from '../models/pedido-response';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class PedidoService {


  AUTH_SERVER: string = 'http://localhost:3000/api';
  authSubject = new BehaviorSubject(false);

  pedidoActual = new EventEmitter();
  
  constructor( private httpClient: HttpClient ) { }


  getPedidos( user: UsuarioI ): Observable<Pedidos> {
    return this.httpClient.post<Pedidos>(`${this.AUTH_SERVER}/usuario`, user.id).pipe(tap( 
      (res:Pedidos ) => {
        if (res) {
           
        }
      }, 
      (err) => {
        console.log("Ocurrio error al al obtener pedidos",err);

      }
    ))
  }





}
