import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { props, Store } from '@ngrx/store';
import { setMenu, setPlayer, close } from '@stores/menu/menu.actions';
import { setUser } from '@stores/auth/auth.actions';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  menuState: any;
  authState: any;
  player = false;
  songKey: string;
  currentUser = JSON.parse(localStorage.getItem('NCT_User')!);
  constructor(
    private store: Store<{ menu, auth }>,
    private afAuth: AngularFireAuth
  ) {
    store.select('menu').subscribe(state => this.menuState = state);
    store.select('auth').subscribe(state => this.authState = state);
  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        const _user = { displayName, email, photoURL, uid }
        this.store.dispatch(setUser({ payload: _user }));
      }
    })
  }

  setMenu() {
    this.store.dispatch(setMenu());
  }

  setPlayer() {
    this.store.dispatch(setPlayer());
  }

  close() {
    this.store.dispatch(close());
  }

  getSong() {

  }

}
