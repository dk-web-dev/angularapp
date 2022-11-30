import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  title = "service papge title"

  //pass data from paretn to child components
   parentMessage = "message from parent Component(service.component.ts)";
   
  constructor() { }

  ngOnInit(): void {
  }

}
