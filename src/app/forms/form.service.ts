import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, Customer } from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private _http: HttpClient) {}

  submitValue(user: User) {
    console.log('form service', user);
    return this._http
      .post('http://localhost:4000/user', user)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  submitcustomerValue(customer: Customer) {
    console.log('customer data from service', customer);
    return this._http.post('http://localhost:4000/customer', customer);
  }
}
