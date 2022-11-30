import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IArtists, IEmployee } from '../interface/employee.interface';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css'],
})
export class EmpDetailComponent implements OnInit {
  title = 'Employee Detail ';
  public Employee: IEmployee[] = [];
  public ArtistDetail: IArtists[] = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployee()
      .subscribe((data) => (this.Employee = data));

    this._employeeService
      .getArtist()
      .subscribe((data) => (this.ArtistDetail = data));
  }
}
