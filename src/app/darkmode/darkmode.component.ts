import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css'],
})
export class DarkmodeComponent implements OnInit {
  setDark: boolean = false;
  @Output() mode = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangeToggle() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
    console.log('from child component darkmode', this.setDark);
  }
}
