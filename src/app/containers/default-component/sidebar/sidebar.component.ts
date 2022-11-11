import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setPlayer } from '@stores/menu/menu.actions';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { sidebar } from '@constants/sidebar';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  player$: Observable<boolean>;
  currentUser: any = null;
  isShowFormLogin: boolean = false;
  sidebarList = sidebar;
  pathname: string = '';
  constructor(
    private player: Store<{ player: boolean, menu: boolean }>,
    private notiflixService: NgxNotiflixService,
  ) {
    this.player$ = player.select('player');
    // this.route.url.subscribe(link => this.pathname = link)
  }

  // how to handle pathname

  ngOnInit(): void {
  }

  setPlayer() {
    if (this.player$)
      this.player.dispatch(setPlayer());
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

  handleShowChildMenu(event: any) {

  }
}
