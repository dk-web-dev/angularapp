import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angualrApp';
  setMode = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeMode(event:any){
    this.setMode = event;
   console.log("this is from app component",this.setMode);
  }
}
