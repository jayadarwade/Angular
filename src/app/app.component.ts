import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmymeal';
  constructor(private _userService:UserService ,private _router:Router){}
  public isLoggedIn():boolean{
    return this._userService.checkToken();
  }
  public singOut(){
    localStorage.removeItem('jwt-token');
    this._router.navigate(['/register']);
  }
}
