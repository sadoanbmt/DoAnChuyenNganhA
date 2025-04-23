import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
    imports: [
        NavbarComponent,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnDestroy {
  loginForm: FormGroup;

  isLoadingSignIn = false;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    // private store: Store<{ auth: AuthState }>,
    private router: Router,
    private _matSnackBar: MatSnackBar,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  // ngOnInit(): void {
  //   this.subscriptions.push(
  //     this.store.select('auth', 'loading').subscribe((loading) => {
  //       this.isLoadingSignIn = loading;
  //     }),
  //     this.store.select('auth', 'idToken').subscribe((val) => {
  //       if (val != '') {
  //         this.router.navigate(['/main']).then(() => {
  //           console.log('tic');
  //         });
  //       }
  //     }),
  //     this.store.select('auth', 'error').subscribe((error) => {
  //       if (error) {
  //         // console.log('Error:', error);
  //         this._matSnackBar.open(error, 'Đóng', {
  //           duration: 5000,
  //         });
  //       }
  //     }),
  //   );
  // }

  signInWithGoogle() {
    // this.store.dispatch(AuthActions.signInWithGoogle());
  }

  signInWithStaticUser() {
    // this.store.dispatch(
    //   // AuthActions.signInWithStaticUser({
    //   //   email: this.loginForm.get('email')?.value,
    //   //   password: this.loginForm.get('password')?.value,
    //   // }),
    // );
  }

}
