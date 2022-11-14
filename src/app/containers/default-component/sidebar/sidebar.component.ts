import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPlayer } from '@stores/menu/menu.actions';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { sidebar } from '@constants/sidebar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  state: any;
  currentUser: any = null;
  isShowFormLogin: boolean = false;
  sidebarList = sidebar;
  pathname: string = '';
  constructor(
    private store: Store<{ player: boolean, menu: boolean }>,
    private notiflixService: NgxNotiflixService,
    private router: Router
  ) {
    store.select('menu').subscribe(state => this.state = state);
    this.pathname = this.router.url;
  }

  // how to handle pathname

  ngOnInit(): void {

  }

  setPlayer() {
    if (this.state.player)
      this.store.dispatch(setPlayer());
  }

  handleLoginForm() {
    this.isShowFormLogin = true;
  }

  handleClose() {
    this.isShowFormLogin = false;
  }

  handleSignIn() {
    //handle later after add firebase
  }

  signOut() {
    //handle later after add firebase
  }

  handleShowChildMenu(event: any, item) {
    if (item.child) {
      if (event.currentTarget.classList.contains("active"))
        event.currentTarget.classList.remove("active");
      else
        event.currentTarget.classList.add("active");
    }
  }
}
