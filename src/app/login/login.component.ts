import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public appTitle: string = "HotelApp";
  public profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    userName: [''],
    password: [''],
    address: [''],
    newsletters: ['']
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Check console');

    console.log(this.profileForm.getRawValue());
  }
}
