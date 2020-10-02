import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public appTitle: string = "HotelApp";
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Check console');

    console.log(this.profileForm.getRawValue());
  }
}
