import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  email: String;
  password: String;

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  login() {
    this.dataService.login(this.email, this.password);
  }

}
