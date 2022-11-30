import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormService } from './reactive-form.service';
import { ToastrService } from 'ngx-toastr';
import { passwordValidator } from './custom validator/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  title = 'angular Reactive form example';

  constructor(
    private _reactiveFormService: ReactiveFormService,
    private fb: FormBuilder,
    private toaster: ToastrService
  ) {}

  //using formBuilder manage formControl of RegisterForm
  RegisterForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
    confirmpassword: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
    address: this.fb.group({
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
    }),
  });

  get f() {
    return this.RegisterForm.controls;
  }

  //submit value to server
  formSubmit() {
    console.log('reactive form class', this.RegisterForm.value);
    this._reactiveFormService.submitValue(this.RegisterForm.value).subscribe({
      next: (res) => {
        console.log('data recieved', res);
        this.toaster.success('thank you for Register', ' Angular', {
          progressBar: true,
          closeButton: true,
        });
      },
      error: (err) => {
        console.log('something went wromg', err.message);
        this.toaster.error('something went wrong', ' Angular');
      },
      complete: () => {
        console.log('completed reactive form');
      },
    });
  }

  //using formBuilder manage formControl of ClientForm
  ClientForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3)]],
    lname: ['', [Validators.required, Validators.minLength(3)]],
  });

  get cf() {
    return this.ClientForm.controls;
  }

  submitClient() {
    console.log('client data form class', this.ClientForm.value);
    this._reactiveFormService
      .submitClientValue(this.ClientForm.value)
      .subscribe({
        next: (res) => {
          console.log('success', res);
          this.toaster.success("success","Angular",{
            progressBar:true,
            closeButton:true
          })
        },
        error: (err) => {
          console.log('daya kuch to gadabad hai', err);
          this.toaster.error("something went wrong","Angular",{
            progressBar:true,
            closeButton:true
          })
        },
        complete: () => {
          console.log('completed');
        },
      });
  }

  ngOnInit(): void {}
}
