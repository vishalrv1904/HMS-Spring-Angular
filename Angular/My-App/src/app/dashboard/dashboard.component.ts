import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private userservice:UserserviceService,private router: Router) { }

  listData: Array<any>;
  field:string;
  user:any;
  id:any;
  role:any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    if(this.id!=null)
    {
      this.userservice.deleteData(this.id).subscribe((data)=>{ console.log("Data Deleted");});
      this.router.navigateByUrl("/dashboard");
    }
  }

  listpatient()
  {
    document.getElementById("doctor").style.backgroundImage="none";
     document.getElementById("patient").style.backgroundImage= "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))";
     this.userservice.patientData.subscribe((data)=>{this.listData=data; console.log(this.listData)});
     this.field="BloodGroup";
   
  }

  listdoctor()
  {
    document.getElementById("patient").style.backgroundImage="none";
    document.getElementById("doctor").style.backgroundImage= "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))";
    this.listData=this.userservice.listOfDoctor;
    this.userservice.doctorData.subscribe((data)=>{this.listData=data});
    this.field="specialization";
   
  }

  update()
  {
    this.router.navigateByUrl("/update");
  }

  addpatient()
  {
    this.router.navigateByUrl("/add/patient");
  }

  adddoctor()
  {
    this.router.navigateByUrl("/add/doctor");
  }

}
