import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContaasService } from '../contaas.service';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
yes:any;
isShows:boolean=false;

  user:User =new User();
  constructor(private http:HttpClient,private testserv:ContaasService) { }

ngOnInit():void{
 // let contaact = this.http.post("http://localhost:9088/postContactdata");
 // contaact.subscribe((data: any)=>this.yes=data)

}
shows(){
  this.isShows=true;
}

openaccount(event:any){
  console.log("user in ts",this.user);
 this.testserv.saveuser(this.user).subscribe(user=>{
   console.log(user);
 });
 alert("Data posted bro")
}

}



