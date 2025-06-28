import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { OnWorkComponent } from './onWork/onWork.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavbarComponent,
      HomeComponent,
      AuthComponent,
      OnWorkComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
