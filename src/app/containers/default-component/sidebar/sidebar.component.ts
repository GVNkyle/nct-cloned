import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { setPlayer } from '@stores/menu/menu.actions';
import { sidebar } from '@constants/sidebar';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuState: any;
  currentUser = JSON.parse(localStorage.getItem('NCT_User')!);
  isShowFormLogin: boolean = false;
  sidebarList = sidebar;
  pathname: string = '';
  constructor(
    private store: Store<{ menu }>,
    private notiflixService: NgxNotiflixService,
    private router: Router,
    private authService: AuthService
  ) {
    store.select('menu').subscribe(state => this.menuState = state);
    this.pathname = this.router.url;
  }

  ngAfterViewChecked() {
    this.pathname = this.router.url;
  }

  ngOnInit(): void {

  }

  setPlayer() {
    if (this.menuState.player)
      this.store.dispatch(setPlayer());
  }

  handleLoginForm() {
    this.isShowFormLogin = true;
  }

  handleClose() {
    this.isShowFormLogin = false;
  }

  async handleSignIn(provider: string) {
    let _provider;
    switch (provider) {
      case 'google':
        _provider = new GoogleAuthProvider();
        break;
      case 'github':
        _provider = new GithubAuthProvider();
        break;
      case 'facebook':
        _provider = new FacebookAuthProvider();
        break;
      default:
        throw new Error('Error: no login provider');
    };
    await this.authService.AuthLogin(_provider);
    await this.getCurrentUser();
    await this.handleClose();
  }

  async signOut() {
    this.notiflixService.confirm("Logout", "Are you sure you want to Logout?", async () => {
      await this.authService.signOut();
      await this.getCurrentUser();
    });
  }

  handleShowChildMenu(event: any, item) {
    if (item.child) {
      if (event.currentTarget.classList.contains("active"))
        event.currentTarget.classList.remove("active");
      else
        event.currentTarget.classList.add("active");
    }
  }

  private getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('NCT_User')!);   
  }
}
