import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { RegistroComponent } from './components/auth/registro/registro.component'
import { AuthGuard } from './components/auth/guards/auth.guard';
import { NoAuthGuard } from './components/auth/guards/no-auth.guard';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[NoAuthGuard]},
    { path: 'registrarse', component: RegistroComponent,canActivate:[NoAuthGuard] },
    { path: 'encargo', component: PreciosComponent,canActivate:[AuthGuard]},
    { path: 'pedidos', component: PedidoComponent,canActivate:[AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: ''} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);