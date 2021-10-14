import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', loadChildren : () =>import ('./login/login.module').then((m) => m.LoginModule)},
  {path:'signup', loadChildren : () =>import ('./signup/signup.module').then((m) => m.SignupModule)},
  {path:'teams', loadChildren : () =>import ('./teams/teams.module').then((m) => m.TeamsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
