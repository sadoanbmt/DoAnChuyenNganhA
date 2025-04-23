import { Component ,OnDestroy, OnInit } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  showDropdown: boolean = false;

  isLoadingSignIn = false;

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _matSnackBar: MatSnackBar,
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(11)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(11)]],
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  ngOnInit(): void {
    this.subscriptions.push(
      // this.store.select('auth', 'loading').subscribe((loading) => {
      //   this.isLoadingSignIn = loading;
      // }),
      // this.store.select('auth', 'idToken').subscribe((val) => {
      //   if (val != '') {
      //     this.router.navigate(['/main']).then(() => {
      //       console.log('tic');
      //     });
      //   }
      // }),
      // this.store.select('auth', 'error').subscribe((error) => {
      //   if (error) {
      //     this._matSnackBar.open(error, 'Đóng', {
      //       duration: 5000,
      //     });
      //   }
      // }),
    );
  }

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

  navigate(path: string) {

    this.router.navigate([path]);
    this.showDropdown = false;
  }


}
