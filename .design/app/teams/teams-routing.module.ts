import {CreateTeamComponent} from './component/create-team/create-team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './component/teams/team.component';

const routes: Routes = [
  {path:'', component:TeamComponent},
  {path:'add',component: CreateTeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
