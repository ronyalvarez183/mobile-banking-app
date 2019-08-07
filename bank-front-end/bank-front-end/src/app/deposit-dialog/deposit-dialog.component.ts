import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { Customer } from '../customer';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.css']
})
export class DepositDialogComponent implements OnInit {

  customer: Customer;
  amount: number;
  current_balance: number;
  new_balance: number;

  constructor(private cookieService: CookieService, private dataService: DataService, public dialogRef: MatDialogRef<DepositDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    this.amount = 0;
    this.new_balance = 0;
    this.customer = JSON.parse(this.cookieService.get('customer'));
    this.current_balance = this.customer.balance;
  }

  deposit() {
    this.new_balance = this.customer.balance + this.amount;
    this.dataService.deposit(this.customer.id, this.amount);
    this.dialogRef.close();
  }

}
