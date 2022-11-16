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
import {
  GridLayoutComponent,
  DefaultLayoutComponent
} from './containers';
import { FooterComponent } from './containers/default-component/footer/footer.component';
import { InnerWidthDirective } from './core/directive/inner-width.directive';
import { menuReducer } from './store/menu/menu.reducer';
import { ClickStopPropagationDirective } from './core/directive/click-stop-propagation.directive';
import { SidebarComponent } from './containers/default-component/sidebar/sidebar.component';
import { FontSizeDirective } from './core/directive/font-size.directive';
import { environment } from '@env/environment';
import { authReducer } from '@stores/auth/auth.reducer';
import { musicReducer } from '@stores/music/music.reducer';
import { playerReducer } from '@stores/player/player.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    DefaultLayoutComponent,
    FooterComponent,
    SidebarComponent
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
    FontSizeDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
