import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { NgxNotiflixService } from './ngx-notiflix.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private notiflixService: NgxNotiflixService,
    private store: Store<{ auth }>
  ) { }

  async signOut() {
    await this.afAuth.signOut();
  }

  public async isLogin(){
    let currentUser;
    await this.store.select('auth').pipe(tap(state => currentUser = state.currentUser));
    return !!currentUser;
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
