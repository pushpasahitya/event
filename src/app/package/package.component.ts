import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {
  users:any;
  me:any;
  you:any;
  your:any;
  isShow:boolean=false;
  isShow1:boolean=false;
  isShow2:boolean=false;
  isShow3:boolean=false;
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    
    let responce= this.http.get("http://localhost:9088/getVenueselectiondetails");
   responce.subscribe((data)=>this.users=data)

   let invitation=this.http.get("http://localhost:9088/getinvitationcardsdetails");
   invitation.subscribe((data)=>this.me=data)
   

   let entertainment=this.http.get("http://localhost:9088/getentertainmentdetails");
   entertainment.subscribe((data)=>this.you=data)
  


   let food =this.http.get("http://localhost:9088/getfooddetails")
   food.subscribe((data)=>this.your=data)
  }

  show(){
    //
    this.isShow=true;
  }
  show1(){
  
    this.isShow1=true;

  }
  show2(){
    this.isShow2=true;
  }
  show3(){
    this.isShow3=true;
  }

}
