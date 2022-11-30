import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  constructor(private _http: HttpClient) {}

  submitValue(register: any) {
    console.log('reactive form service', register);
    return this._http.post('http://localhost:4000/register', register);
  }

  submitClientValue(client: any) {
    console.log('client data form service', client);
    return this._http.post('http://localhost:4000/client',client);
  }
}
