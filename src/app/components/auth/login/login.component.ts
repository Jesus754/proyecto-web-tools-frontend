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

  constructor(  private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
  }

  onLogin(form) : void {
    console.log(form.value);

    this.authService.login(form.value).subscribe ((res) => {
      if (res) 
        this.router.navigateByUrl('/auth');
      else
        err => console.log(err)
    },
     (err) => {
      console.log("Ocurrio un error", err);
    }
    )
  }

}
