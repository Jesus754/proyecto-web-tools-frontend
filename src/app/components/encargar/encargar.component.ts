import { Component, OnInit, OnDestroy } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-encargar',
  templateUrl: './encargar.component.html',
  styleUrls: ['./encargar.component.css']
})
export class EncargarComponent  {
  
  
  pedidoActual = [];
  total = 0;
  constructor(private pedidoService: PedidoService, private router: Router) { }

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


  realizarCompra() {
    // nombre, cantidad, -Agregar total al backend -
    if (this.pedidoActual.length>0 ) {
    this.pedidoService.crearPedido(this.pedidoActual).subscribe( 
      (res) => { 
        if (res){
          this.router.navigateByUrl('/encargo');
          this.pedidoActual = [];
          this.total = 0;
        }
        else
          err => console.log(err)
    });
    } 
    
  }

  eliminarProducto(pedido) {
    console.log(pedido.nombre);
     for (var i=0; i< this.pedidoActual.length;i++) {
       if (this.pedidoActual[i].nombre === pedido.nombre) {
         if ( this.pedidoActual[i].cantidad > 1){
            this.pedidoActual[i].cantidad = this.pedidoActual[i].cantidad - 1;
            this.pedidoActual[i].total = this.pedidoActual[i].total - this.pedidoActual[i].precio;
          }
          else {
            this.pedidoActual.splice(i,1);
          }

       }
     }
     this.total=0;
     this.pedidoActual.forEach(element => {
      this.total = this.total + element.total;
    });
  }
  

}