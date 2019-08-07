import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DepositDialogComponent } from './deposit-dialog/deposit-dialog.component';
import { WithdrawDialogComponent } from './withdraw-dialog/withdraw-dialog.component';

import { DataService } from './data.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardPageComponent,
    DepositDialogComponent,
    WithdrawDialogComponent
  ],
  entryComponents: [DepositDialogComponent, WithdrawDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'signup',
        component: SignupPageComponent
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent
      }
    ])
  ],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
