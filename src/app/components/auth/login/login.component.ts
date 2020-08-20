import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../../../services/auth.service';
//import { UserI } from "./../../../models/user;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  error;
  mensaje;
  constructor(  private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
  }

  onLogin(form) : void {
    console.log(form.value);

    this.authService.login(form.value).subscribe ((res) => {
        this.router.navigateByUrl('/auth');
    },
     (err) => {
      console.log("Ocurrio un error", err);
      this.error = true;
      this.mensaje = err.error.err.mensaje;
    }
    )
  }

  isError() {
    return this.error;
  }

}
