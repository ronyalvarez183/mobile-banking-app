import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  customer: Customer;

  ngOnInit() {
    this.customer = {
      id: '',
      first_name: '',
      last_name: '',
      balance: 0,
      email: '',
      password: ''
    }
  }

  signup() {
    this.dataService.signup(this.customer);
  }

}
