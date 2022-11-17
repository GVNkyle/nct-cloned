import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { setMenu, setPlayer, close } from '@stores/menu/menu.actions';
import { setUser } from '@stores/auth/auth.actions';
import { DestroyService } from '@services/destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  providers: [DestroyService]
})
export class DefaultLayoutComponent implements OnInit {
  menu: boolean;
  constructor(
    private store: Store<{ menu }>,
    private afAuth: AngularFireAuth,
    private destroyService: DestroyService,
  ) {
    store.select('menu').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => this.menu = state.menu);

  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.store.dispatch(setUser({ payload: user }));
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

}
