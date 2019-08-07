import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from './customer';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  requestString: string;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(email: String, password: String) {
    // Setting up the body of the form
    const body = {
      email: email,
      password: password
    };

    const req = this.http.post('http://localhost:8080/api/customer/login', body)
    .subscribe(
      res => {
        if(res == null) {
          // this.valid = true;
          console.log("The response is null.")
        } else {
          this.cookieService.set( 'customer', JSON.stringify(res));
          this.router.navigate(['/dashboard']);
        }
      },
      err => {
        console.log("An error occurred during the post request.");
      }
    );
  }

  signup(customer: Customer) {
    // Setting up the body of the form
    const body = {
      id: '',
      first_name: customer.first_name,
      last_name: customer.last_name,
      balance: customer.balance,
      email: customer.email,
      password: customer.password
    };

    const req = this.http.post('http://localhost:8080/api/customer/signup', body)
    .subscribe(
      res => {
        if(res == null) {
          // this.valid = true;
          console.log("The response is null.")
        } else {
          // this.cookieService.set( 'Test', JSON.stringify(body) );
          this.router.navigate(['/login']);
        }
      },
      err => {
        console.log("An error occurred during the post request.");
      }
    );
  }

  deposit(id: String, amount: Number) {
    // Setting up the body of the form
    const body = {
      id: id,
      amount: amount
    };

    const req = this.http.post('http://localhost:8080/api/customer/deposit', body)
    .subscribe(
      res => {
        if(res == null) {
          // this.valid = true;
          console.log("The response is null.")
        } else {
          this.cookieService.set( 'customer', JSON.stringify(res));
          this.router.navigate(['/login']);
        }
      },
      err => {
        console.log("An error occurred during the post request.");
      }
    );

    return req;
  }

  withdraw(id: String, amount: Number) {
    // Setting up the body of the form
    const body = {
      id: id,
      amount: amount
    };

    const req = this.http.post('http://localhost:8080/api/customer/withdraw', body)
    .subscribe(
      res => {
        if(res == null) {
          // this.valid = true;
          console.log("The response is null.")
        } else {
          this.cookieService.set( 'customer', JSON.stringify(res));
          this.router.navigate(['/login']);
        }
      },
      err => {
        console.log("An error occurred during the post request.");
      }
    );

    return req;
  }

  deleteAccount(id: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.requestString = 'http://localhost:8080/api/customer/delete/' + id;
    console.log(this.requestString)
    this.http.delete(this.requestString, httpOptions)
    .subscribe(
      res => {
        if(res == null) {
          // this.valid = true;
          console.log("The response is null.")
        } else {
          this.router.navigate(['/login']);
        }
      }, err => {
        console.log("An error occurred during the post request.");
      }
    );
  }
}
