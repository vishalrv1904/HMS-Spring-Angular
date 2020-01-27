import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { user } from '../user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private userservice: UserserviceService, private router: Router) { }
  role: string;
  show: boolean = true;
  ngOnInit() {
    this.role = this._Activatedroute.snapshot.paramMap.get("role");
    if (this.role === 'patient') {
      this.show = false;
    }
  }

  AddDoctor(data){
    const username =data.username;
    const password=data.password;
    const phoneNumber=data.phoneNumber;
    const firstName=data.firstName;
    const lastName=data.lastName;
    const city=data.city;
    const state=data.state;
    const specilization=data.specilization;
    console.log({specilization,username, password, phoneNumber, firstName, lastName, city, state } as user);
    this.userservice.addData(this.role,{ specilization,username, password, phoneNumber, firstName, lastName, city, state } as user).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/dashboard");
    });
  }

  AddPatient(data){
    const username =data.username;
    const password=data.password;
    const phoneNumber=data.phoneNumber;
    const firstName=data.firstName;
    const lastName=data.lastName;
    const city=data.city;
    const state=data.state;
    const bloodGroup=data.bloodGroup;
    const weight=data.weight;
    this.userservice.addData(this.role,{ bloodGroup,weight,username, password, phoneNumber, firstName, lastName, city, state } as user).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/dashboard");
    });
  }

  
  
}
