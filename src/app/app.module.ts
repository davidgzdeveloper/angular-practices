import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingModule } from './routing/routing.module';
import { LoginService } from './login.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule, HttpClientModule ],
  declarations: [ AppComponent, MenuComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [LoginService]
})
export class AppModule { }
