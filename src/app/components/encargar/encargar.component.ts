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
    this.pedidoService.crearPedido(this.pedidoActual).subscribe( 
      (res) => { 
        if (res) 
          this.router.navigateByUrl('/auth');
        else
          err => console.log(err)
    });
    
   
  }


  

}