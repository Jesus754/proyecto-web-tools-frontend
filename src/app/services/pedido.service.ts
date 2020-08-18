import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioI } from '../models/user';
import { Pedidos } from '../models/pedido-response';
import { createPedidoResponseI } from '../models/create-pedido-response';
import { HttpClient, HttpParams} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class PedidoService {


  //AUTH_SERVER: string = 'http://localhost:3000/api';
  AUTH_SERVER: string = 'http://backend-taller-web.herokuapp.com/api';
  authSubject = new BehaviorSubject(false);

  pedidoActual = new EventEmitter();
  
  allPedidos = new EventEmitter();

  constructor( private httpClient: HttpClient , private authService : AuthService) { }


  getPedidos(): Observable<Pedidos> {
    let usuarioLoggeado  = this.authService.getUsuarioLoggeado();
    console.log("usuario loggeado", usuarioLoggeado);
    if (!(usuarioLoggeado === undefined)) {
      const url  = `${this.AUTH_SERVER}/usuario/${usuarioLoggeado.data._id}/pedidos`
      console.log("get a ", url);
      return this.httpClient.get<Pedidos>(url).pipe(tap( 
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

  crearPedido(pedidoActual) : Observable<createPedidoResponseI> {
    let usuarioLoggeado  = this.authService.getUsuarioLoggeado();
    console.log("usuario logeado ", usuarioLoggeado);
    var data = {};
    data["pedido"] = pedidoActual;
    var total = 0;
    pedidoActual.forEach(elemento =>  {
      total = total + elemento.total;
      delete elemento["descripcion"];
    })
    data["total_pedido"] = total;
    data["user_id"] = usuarioLoggeado._id;
    console.log(data);
    return this.httpClient.post<createPedidoResponseI>(`${this.AUTH_SERVER}/usuario/pedido`, data).pipe(tap( 
      (res ) => {
        if (res) {
          console.log(res);
        }
      }, 
    ))

  }





}
