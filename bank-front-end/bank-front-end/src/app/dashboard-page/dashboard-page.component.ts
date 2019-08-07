import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog } from '@angular/material';
import { DepositDialogComponent } from '../deposit-dialog/deposit-dialog.component';
import { async } from 'rxjs/internal/scheduler/async';
import { WithdrawDialogComponent } from '../withdraw-dialog/withdraw-dialog.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private cookieService: CookieService,
    public dialog: MatDialog) { }

  customer: Customer;
  balance: Number;
  amount: Number;
  cookie: String;

  ngOnInit() {
    this.customer = JSON.parse(this.cookieService.get('customer'));
    this.balance = this.customer.balance;

    if(this.cookie = '') {
      this.router.navigate(['login']);
    }
  }

  openDepositDialog(): void {
    const dialogRef = this.dialog.open(DepositDialogComponent, {
      data: {data: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/dashboard']);
    });
  }

  openWithdrawDialog(): void {
    const dialogRef = this.dialog.open(WithdrawDialogComponent, {
      data: {data: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    this.cookieService.delete('customer');
    this.router.navigate(['/login']);
  }

  deleteAccount() {
    this.customer = JSON.parse(this.cookieService.get('customer'));
    this.dataService.deleteAccount(this.customer.id)
    // this.router.navigate(['/login']);
  }

}
