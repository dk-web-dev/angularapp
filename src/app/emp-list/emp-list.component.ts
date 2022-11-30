import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee, IArtists } from '../interface/employee.interface';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  title = 'Employee List';
  public Employee: IEmployee[] = [];
  public artistList: IArtists[] = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployee()
      .subscribe((data) => (this.Employee = data));

    this._employeeService
      .getArtist()
      .subscribe((data) => (this.artistList = data));
  }
}
