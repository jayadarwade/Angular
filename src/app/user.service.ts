import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  register = 'https://bookmymealjaya.herokuapp.com/api/user/signup';
  login ='https://bookmymealjaya.herokuapp.com/api/user/signin';
  constructor(private _register: HttpClient) {}
  public Register(
    username: string,
    email: string,
    password: string,
    mobile: string
  ): Observable<any> {
    return this._register.post<any>(this.register, {
      username: username,
      email: email,
      password: password,
      mobile: mobile,
    });
  }
  public Logindone(email:string,password:string):Observable<any>{
  return  this._register.post<any> (this.login,{
      email:email,
      password:password,
    })
  }
}



