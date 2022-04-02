import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 email='';
 password='';
  constructor(private _login:UserService,private router:Router) { }
 Login(){
   this._login.Logindone(this.email,this.password).subscribe(data=>{
     console.log(this.email+' '+this.password)
     console.log(data)
     if(data.status=='login success'){
       alert('login succes')
       localStorage.setItem('jwt-token',data.token);
       this.router.navigate(['appCategory']);
     }
   })
 }
  ngOnInit(): void {
  }

}
