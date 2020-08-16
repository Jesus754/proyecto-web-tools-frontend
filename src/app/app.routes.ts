import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { RegistroComponent } from './components/auth/registro/registro.component'
import { AuthGuard } from './components/auth/guards/auth.guard';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[!AuthGuard]},
    { path: 'registrarse', component: RegistroComponent,canActivate:[!AuthGuard] },
    { path: 'encargo', component: PreciosComponent,canActivate:[AuthGuard]},
    { path: 'pedidos', component: ProtegidaComponent,canActivate:[AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: ''} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);