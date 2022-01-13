import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import firebase from 'firebase/compat/app';
import 'firebase/auth';
//import { BehaviorSubject, Observable, tap } from 'rxjs';

//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { User } from './user.model';
//import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  userName:string | undefined | null ='';
  isLoggedIn = false;
 // user: BehaviorSubject<User> = new BehaviorSubject<User>({} as any);
  constructor( //private authFire: AngularFireAuth,//
     private router: Router) { }

  getIsLoggedIn() {
  }

  emailSignup(email: string, password: string) {

  }

  login(email: string, password: string) {
    this.isLoggedIn = true;
    }

  logout() {

      this.userName = '';
      this.isLoggedIn = false;
    // return JSON.parse(localStorage.getItem(''))
  }

  currentUser() {
    //return JSON.parse(localStorage.getItem('currentUser'))
  }

  loginStatus(){
    return this.isLoggedIn;
  }

  getAuthStatus(){
    if(this.isLoggedIn)
      return true;
    return false;
  }
  /*
  authenticatedUser(email: string, localId: string, idToken: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = { email, localId, idToken, expirationDate }
    console.log('user =>', user);
    this.user.next(user);
  }
*/
}
