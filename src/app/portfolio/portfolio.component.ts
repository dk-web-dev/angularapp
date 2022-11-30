import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  // pass data from child to parent component(app-hello)
  Message: string =
    'this message from child to parent component using @output() Decorator';
  @Output() eventMessage = new EventEmitter();

  sendMessage(event: any) {
    this.eventMessage.emit(this.Message);
  }

  constructor() {}

  ngOnInit(): void {}
}
