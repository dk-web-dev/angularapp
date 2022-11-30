import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepageeee',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title = 'homepage title';

  //property binding
  myid = 'name';
  isdisabled = true;

  //class binding
  Color = 'text-primary text-uppercase';
  //multiplse class binding
  hasError = true;
  multiClass = 'my-class-1 my-class-2';

  //style binding
  multiStyle = {
    color: 'red',
    fontSize: 'bold',
    textDecoration: 'line-through',
  };

  constructor() {}

  ngOnInit(): void {}
}
