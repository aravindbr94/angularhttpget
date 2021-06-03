import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  baseurl="https://api.github.com";
  constructor(private http:HttpClient){}

  public getservice(username:string):Observable<any>
  {
    return this.http.get(this.baseurl+"/users/"+username+"/repos");
  }
 
}
