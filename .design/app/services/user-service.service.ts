import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../signup/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = 'http://localhost:8080/cms/api/v1'
  constructor(private http:HttpClient) { }

  getUserList(): any{
    return this.http.get(`${this.baseUrl}/users/get`);
  }
  createUser(user:any):any{

    return this.http.post(`${this.baseUrl}/users/add`,user)
  }
  getUserByUserIdAndPassword(user:User): any{
    return this.http.post(`${this.baseUrl}/users/login`,user)
  }
}
