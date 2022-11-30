import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  //angular-data binding
  title = 'Hello Component';

  // Input() decoretor used form access the parent data
  @Input() childMessage: string | undefined;
  multiStyle = {
    color: 'white',
    fontSize: 'bold',
    backgroundColor: 'black',
  };

  // recieved messsage from child  event called
  message: string = '';
  recievedMessage(event: any) {
    this.message = event;
  }

  constructor() {}

  ngOnInit(): void {}
}
