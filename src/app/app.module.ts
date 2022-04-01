import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { UserService } from './user.service';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryService } from './category.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    CategoryComponent,
    CategoryAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
