import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from '../../services/pedido.service'
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  allPedidos;
  detalle = [];
  constructor(private pedidoService:PedidoService, private authService: AuthService) {
    
   }

  ngOnInit(): void {
    this.allPedidos = [];
    this.detalle = [];
    this.pedidoService.getPedidos().subscribe((arreglo) => {
      console.log("Respuesta ",arreglo.pedidos);
      this.allPedidos =  arreglo.pedidos ;
      this.allPedidos.forEach(element => {
        this.detalle.push(element.pedido)
      });
      console.log("detalle",this.detalle)
    });
  }

}
