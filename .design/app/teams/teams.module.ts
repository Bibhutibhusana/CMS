import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamComponent } from './component/teams/team.component';
import { MaterialModule } from '../material/material.module';
import { CreateTeamComponent } from './component/create-team/create-team.component';


@NgModule({
  declarations: [
    TeamComponent,
    CreateTeamComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule
  ]
})
export class TeamsModule { }
