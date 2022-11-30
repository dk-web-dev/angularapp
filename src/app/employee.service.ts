import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEmployee,IArtists} from '../app/interface/employee.interface'

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
   
   public EMP_URL:string = "/assets/api/employee.json";
   public ART_URL:string = "/assets/api/artist.json";

  constructor(private _http:HttpClient) {}
  
  getEmployee():Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this.EMP_URL);
  }

  getArtist():Observable<IArtists[]> {
    return this._http.get<IArtists[]>(this.ART_URL)
  }
}
