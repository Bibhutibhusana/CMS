import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../teams/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  baseUrl = 'http://localhost:8080/cms/api/v1'
  constructor(private http:HttpClient) { }
  getTeamList():any{
    return this.http.get(`${this.baseUrl}/teams/get`);
  }
  getTeamById(id:string): any{
    return this.http.get(`${this.baseUrl}/teams/${id}`);
  }

  createTeam(team:Team): any{
    return this.http.post(`${this.baseUrl}/teams`,team)
  }
}
