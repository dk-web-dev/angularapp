import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public USER_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http:HttpClient) { }

  getUserList(){
    return this._http.get(this.USER_URL);
  }

  singleUserById(userId:any){
    return this._http.get(`${this.USER_URL}/${userId}`);
  }
}
