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

@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    DefaultLayoutComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InnerWidthDirective,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
