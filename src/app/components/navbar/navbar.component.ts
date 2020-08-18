import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [ './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  estaAutenticado() {
    return this.authService.loggedIn();
  }

  logOut() {
    return this.authService.logout();
  }

  getUsuarioLoggeado() {
    return this.authService.getUsuarioLoggeado();
  }
}
