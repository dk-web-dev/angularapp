import { Component, OnInit } from '@angular/core';
import { User, Customer } from './user';
import { FormService } from './form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  title = 'angualr form with TDF';
  interested = ['reactjs', 'angualrJs', 'vuejs', 'nodejs', 'wordpresss'];

  userModel = new User('', '', '', '', ''); //user form model for data binding
  customerModel = new Customer('', ''); // custome form model form data binding

  constructor(
    private _formService: FormService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  //submit enroll form value
  onsubmit() {
    console.log('form class', this.userModel);
    this._formService.submitValue(this.userModel).subscribe({
      next: (res) => {
        console.log('success', res);
        this.toaster.success('thank you for enrolled', ' angular Bootcamp', {
          progressBar: true,
          closeButton: true,
        });
      },
      error: (err) => {
        console.log('error', err.message);
        this.toaster.error('oops somthing wrong !!!', ' angular Bootcamp', {
          progressBar: true,
          closeButton: true,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  //submit customer form value
  CustomerForm() {
    console.log('customer data from class', this.customerModel);
    this._formService.submitcustomerValue(this.customerModel).subscribe({
      next: (res) => {
        console.log('success', res);
        this.toaster.success('thank you', 'customer', {
          progressBar: true,
          closeButton: true,
        });
      },
      error: (err) => {
        console.log('error occurds', err);
        this.toaster.error('something went wrong', 'customer', {
          progressBar: true,
          closeButton: true,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
