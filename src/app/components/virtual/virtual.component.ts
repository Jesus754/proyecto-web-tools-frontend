import { Component, OnInit } from '@angular/core';
import { PizzasService } from './../../services/pizzas.service'; 
import { Router } from "@angular/router";
import { EncargarComponent} from './../encargar/encargar.component';
import { PedidoService } from 'src/app/services/pedido.service';
import { PreciosComponent } from '../precios/precios.component';
@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  pizzas = null;
  arreglo = [];
  constructor(private pizzasService: PizzasService, private router:Router, private pedidoService: PedidoService) {
   
    
   }

  ngOnInit(): void {
    this.pizzasService.getPizzas().subscribe((res) => {
      this.pizzas = res.pizzas;
    });
  }
  
  agregarAPedido(form) {
    
    var dx = this.arreglo.indexOf(form);
    if (dx != -1){
     let cantidad = this.arreglo[dx].cantidad;
     this.arreglo[dx].cantidad = cantidad + 1;
     this.arreglo[dx].total = this.arreglo[dx].total +  this.arreglo[dx].precio;
    }
    else{
      
      form.cantidad = 1;
      form.total = form.precio;
      this.arreglo.push(form);
   }
       
   
    this.pedidoService.pedidoActual.emit(this.arreglo);
  }

}
