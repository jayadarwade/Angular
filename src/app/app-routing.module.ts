import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryComponent } from './category/category.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'register', component:UserRegisterComponent},
  {path:'login', component:UserLoginComponent},
  {path:'categoryList', component:CategoryComponent,canActivate:[(AuthGuard)]},
  {path:'appCategory', component:CategoryAddComponent,canActivate:[(AuthGuard)]},
  {path:'edit-category/:id', component:CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
