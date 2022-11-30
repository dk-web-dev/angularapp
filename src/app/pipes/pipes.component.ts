import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'angular pipes Example';
  todaydate = new Date();
  number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  jsonObj = {
    id: 28,
    name: 'dharmesh',
    city: 'botad',
  };

  //digital count pipes value
  digit = 1024;
  //sqrt of number
  sqrtNum = 7;

  //age calculator
  birthday = new Date();
}
