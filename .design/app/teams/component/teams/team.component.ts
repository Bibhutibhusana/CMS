import {ElementSelectionService} from './../../../element-selection.service';
import {ComponentInspectorService} from './../../../component-inspector.service';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team = new Team();
  teamList:Array<Team> = new Array<Team>();
  //displayedColumns=['_id','teamId','name','place','alias','noOfPlayer']
	displayedColumns = ['id','aliasName','location','teamCode','teamName']
  constructor(public __elementSelectionService:ElementSelectionService, private __componentInspectorService:ComponentInspectorService,
private teamService:TeamService) {this.__componentInspectorService.getComp(this);
 }

  ngOnInit(): void {
    this.teamService.getTeamList().subscribe((data:any) =>{
      console.log(data);
      this.teamList = data;
    })
  }


}
