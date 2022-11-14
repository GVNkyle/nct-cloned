import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setMenu, setPlayer, close } from '@stores/menu/menu.actions';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  menuState: any;
  constructor(
    private store: Store<{ menu, auth }>
  ) {
    store.select('menu').subscribe(state => this.menuState = state);
  }

  ngOnInit(): void {
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
