import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivosComponent } from './ativos/ativos.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroGerentesComponent } from './cadastro-gerentes/cadastro-gerentes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { GerentesComponent } from './gerentes/gerentes.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent , canActivate: [AuthGuard]},
  { path: '', component: GerentesComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-gerentes', component: CadastroGerentesComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-ativos', component: AtivosComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-clientes', component: CadastroClientesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
