import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setMenu, setPlayer, close } from '@stores/menu/menu.actions';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  menu$: Observable<boolean>;
  constructor(private menu: Store<{ player: boolean, menu: boolean }>) { 
    this.menu$ = menu.select('menu');
  }

  ngOnInit(): void {
  }

  setMenu() {
    this.menu.dispatch(setMenu());
  }

  setPlayer() {
    this.menu.dispatch(setPlayer());
  }

  close() {
    this.menu.dispatch(close());
  }

}
