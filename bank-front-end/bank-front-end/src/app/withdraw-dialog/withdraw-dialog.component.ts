import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-withdraw-dialog',
  templateUrl: './withdraw-dialog.component.html',
  styleUrls: ['./withdraw-dialog.component.css']
})
export class WithdrawDialogComponent implements OnInit {

  customer: Customer;
  amount: number;
  current_balance: number;
  new_balance: number;

  constructor(private cookieService: CookieService, private dataService: DataService, public dialogRef: MatDialogRef<WithdrawDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.amount = 0;
    this.new_balance = 0;
    this.customer = JSON.parse(this.cookieService.get('customer'));
    this.current_balance = this.customer.balance;
  }

  withdraw() {
    this.new_balance = this.customer.balance - this.amount;
    this.dataService.withdraw(this.customer.id, this.amount);
    this.dialogRef.close();
  }

}
