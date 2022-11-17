import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { NgxNotiflixService } from './ngx-notiflix.service';
import { USER } from '@constants/local-storage'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private notiflixService: NgxNotiflixService
  ) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem(USER, JSON.stringify(this.user));
        JSON.parse(localStorage.getItem(USER)!)
      } else {
        localStorage.setItem(USER, null);
        JSON.parse(localStorage.getItem(USER)!);
      }
    })
  }

  get isLoggedIn(): boolean {
    const user: User = JSON.parse(localStorage.getItem(USER)!);
    if (user)
      return true;
    else
      return false;
  }

  async signOut() {
    await this.afAuth.signOut();
    // localStorage.removeItem(USER);
  }

  private setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    // localStorage.setItem(USER, JSON.stringify(userData));
    // JSON.parse(localStorage.getItem(USER)!)
    return userRef.set(userData, {
      merge: true
    });
  }

  async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.setUserData(result.user);
    } catch (err) {
      this.notiflixService.error(err.message);
    }
  }

}
