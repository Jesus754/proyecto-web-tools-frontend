import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'frontend';

  constructor(private authService: AuthService) {

  }

  ngOnDestroy(){
  }
}
