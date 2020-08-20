import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';





//routes
import { APP_ROUTING } from './app.routes'


//servicios
import { AuthService } from './services/auth.service';
import { PedidoService } from './services/pedido.service';

//componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent} from './components/auth/registro/registro.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { AsideComponent } from './components/aside/aside.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { EncargarComponent } from './components/encargar/encargar.component';


import { AuthGuard } from './components/auth/guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    VirtualComponent,
    AsideComponent,
    PedidoComponent,
    EncargarComponent
  ],
  imports: [ 
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    MatIconModule,
    MatFormFieldModule,


    APP_ROUTING,


    BrowserAnimationsModule
  ],
  providers: [ 
    AuthService,
    PedidoService,
    EncargarComponent,
    AuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
