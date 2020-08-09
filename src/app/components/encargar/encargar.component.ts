import { Component, OnInit, OnDestroy } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-encargar',
  templateUrl: './encargar.component.html',
  styleUrls: ['./encargar.component.css']
})
export class EncargarComponent  {
  
  
  pedidoActual = [];
  total = 0;
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
     this.pedidoService.pedidoActual.subscribe( (arreglo) => {
       this.pedidoActual = arreglo;
       this.total = 0;
       this.pedidoActual.forEach(element => {
         this.total = this.total +element.total;
       });
     }
    );
  }
  


  

}
/** if (dx != -1){
        console.log("Entro al if");
        let cantidad = this.pedidoActual[dx].cantidad;
        let precio = this.pedidoActual[dx].precio;
        this.pedidoActual[dx].cantidad = cantidad + 1;
        this.pedidoActual[dx].precio = this.pedidoActual[dx].precio  + precio 
      }
      else{
        
        pizza.cantidad = 1;
        this.pedidoActual.push(pizza);
        console.log("entro al else", this.pedidoActual.length);
      } */