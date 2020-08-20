import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from "@angular/router";
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  error;
  mensaje;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onRegister(form): void {
     console.log("Datos del formulario",form.value );
     this.authService.registro(form.value).subscribe(
       (res) => {
         if (res) {
           this.router.navigateByUrl("/auth");
         } 
       }, (err) => {
         console.log("Ocurrio un error",err);
         this.error=true;
         this.mensaje = err.error.err.message;
       }
     )
  }

  isError() {
    return this.error;
  }
}
