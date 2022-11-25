import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const APP_CONTAINERS = [
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
import { DefaultLayoutComponent, FooterComponent, SidebarComponent, PlayerComponent } from './containers';
import { FormatTimePipe } from './core/pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ menu: menuReducer, auth: authReducer, music: musicReducer, player: playerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    InnerWidthDirective,
    ClickStopPropagationDirective,
    FontSizeDirective,
    FormatTimePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
