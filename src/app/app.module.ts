import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




//routes
import { APP_ROUTING } from './app.routes'


//servicios
import { AuthService } from './services/auth.service';

//componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent} from './components/auth/registro/registro.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
