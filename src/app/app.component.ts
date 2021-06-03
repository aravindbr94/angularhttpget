import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Repos } from './repos';
import { GithubserviceService } from './githubservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 username="aravindbr94";
 repos:Repos[];
 isLoading=true;
 Errors;
 constructor(private service:GithubserviceService){}

 public getservices()
 {
   this.service.getservice(this.username).subscribe(
     (response)=>{
       console.log(response);
       this.repos=response;
     },
     (errors)=>{
       console.log(errors);
       this.Errors=errors;
       this.isLoading=false;
     },
     ()=>{
       console.log("Services Done");
       this.isLoading=false;
     }
     )
 }

}
