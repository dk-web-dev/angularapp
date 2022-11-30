import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  title = 'contact us page title';

  //event Binding
  count = 0;
  myClickFun(event: any) {
    console.log(event);
    alert('click event run !!!');
    this.count++;
  }

  //template reference variable
  submitValue(fname: any, lname: any) {
    alert('welcome ' + fname.value + ' ' + lname.value);
  }

  //two way data-binding
  Firstname = '';

  //*ngIf structure directive example
  isShow = true;
  toggleValue(event: any) {
    this.isShow = !this.isShow;
  }

  //*ngSwitch structure Directive example
  selectNum = '';
  Number = [1, 2, 3, 4, 5, 6];

  //*ngFor structure Directive Example
   selectedMonth:any = {};
   Months = [
    {name:'January',color:'BlueViolet'},
    {name:'February',color:'Chartreuse'},
    {name:'March',color:'Crimson'},
    {name:'April',color:'Cyan'},
    {name:'May',color:'DarkSlateGrey'},
    {name:'June',color:'DeepPink'},
    {name:'July',color:'ForestGreen'},
    {name:'August',color:'Indigo'},
    {name:'September',color:'SaddleBrown'},
    {name:'October',color:'SpringGreen'},
    {name:'November',color:'Thistle'},
    {name:'December',color:'Teal'},
    ];

  constructor() {}

  ngOnInit(): void {}
}
