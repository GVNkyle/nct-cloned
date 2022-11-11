import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  GridLayoutComponent,
  DefaultLayoutComponent
} from './containers';
import { FooterComponent } from './containers/default-component/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { InnerWidthDirective } from './core/directive/inner-width.directive';
import { menuReducer } from './store/menu/menu.reducer';
import { ClickStopPropagationDirective } from './core/directive/click-stop-propagation.directive';
import { SidebarComponent } from './containers/default-component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    DefaultLayoutComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InnerWidthDirective,
    ClickStopPropagationDirective,
    StoreModule.forRoot({ menu: menuReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
