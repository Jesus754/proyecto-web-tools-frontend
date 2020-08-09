import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PedidoService } from './../../services/pedido.service';
import { UsuarioI } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {


  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  
  }

}
