import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {user} from '../user';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private userservice:UserserviceService,private router: Router) { }
   userId:number;
  ngOnInit() {
    this.userId=parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    console.log(this.userId);
      
  }

  update(id:number,password:string,phoneNumber:string,firstName:string,lastName:string,city:string,state:string) {    
    this.userservice.updateData({id,password,phoneNumber,firstName,lastName,city,state} as user).subscribe((data)=>{console.log(data);
      this.router.navigateByUrl("/dashboard");});
  }

}
