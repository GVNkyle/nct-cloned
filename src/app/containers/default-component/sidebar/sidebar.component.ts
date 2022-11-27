import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

import { NgxNotiflixService } from '@services/ngx-notiflix.service';
import { setPlayer } from '@stores/menu/menu.actions';
import { sidebar } from '@constants/sidebar';
import { AuthService } from '@services/auth.service';
import { DestroyService } from '@services/destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [DestroyService]
})
export class SidebarComponent implements OnInit {
  player: boolean;
  currentUser: any;
  isShowFormLogin: boolean = false;
  sidebarList = sidebar;
  pathname: string = '';
  constructor(
    private store: Store<{ menu, auth }>,
    private notiflixService: NgxNotiflixService,
    private router: Router,
    private authService: AuthService,
    private destroyService: DestroyService
  ) {
    store.select('menu').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => this.player = state.player);
    store.select('auth').pipe(takeUntil(this.destroyService.destroys$)).subscribe(state => this.currentUser = state.currentUser);
  }

  ngOnInit(): void {
    //subscribe when url changes
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.pathname = event.url;
      }
    });    
  }

  setPlayer() {
    if (this.player)
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
    await this.handleClose();
  }

  async signOut() {
    this.notiflixService.confirm("Logout", "Are you sure you want to Logout?", async () => {
      await this.authService.signOut();
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

}
