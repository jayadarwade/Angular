import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  mobile = '';

  constructor(private _RegisterDone: UserService) {}

  ngOnInit(): void {}
  public registerDone() {
    this._RegisterDone
      .Register(this.username, this.email, this.password, this.mobile)
      .subscribe((data) => {
        if (data.err) alert('failed');
        else alert('succes');
      });
  }
}
