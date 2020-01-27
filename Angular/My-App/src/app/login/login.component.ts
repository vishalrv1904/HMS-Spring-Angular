import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserserviceService,private router: Router) { }

  ngOnInit() {
  }


login(name: string,password :string)
{ 
  this.userservice.name=name;
  this.userservice.password=password;
  this.userservice.user.subscribe((data)=>{this.userservice.userDetails=data; this.router.navigateByUrl("/dashboard");});
}




}
