import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const APP_CONTAINERS = [
  GridLayoutComponent,
  DefaultLayoutComponent,
  FooterComponent,
  SidebarComponent,
  PlayerComponent
]
import { InnerWidthDirective } from '@directives/inner-width.directive';
import { ClickStopPropagationDirective } from '@directives/click-stop-propagation.directive';
import { FontSizeDirective } from '@directives/font-size.directive';
import { environment } from '@env/environment';
import { menuReducer } from '@stores/menu/menu.reducer';
import { authReducer } from '@stores/auth/auth.reducer';
import { musicReducer } from '@stores/music/music.reducer';
import { playerReducer } from '@stores/player/player.reducer';
import { GridLayoutComponent, DefaultLayoutComponent, FooterComponent, SidebarComponent, PlayerComponent } from './containers';
import { FormatTimePipe } from './core/pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    FormatTimePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ menu: menuReducer, auth: authReducer, music: musicReducer, player: playerReducer }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    InnerWidthDirective,
    ClickStopPropagationDirective,
    FontSizeDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
