import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryComponent } from './category/category.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'register', component:UserRegisterComponent},
  {path:'login', component:UserLoginComponent},
  {path:'categoryList', component:CategoryComponent},
  {path:'appCategory', component:CategoryAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {path: 'singin', component: TestComponent},