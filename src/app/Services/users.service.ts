import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = environment.apiurl;
  id=this.route.snapshot.params['id']

  constructor(private httpclient: HttpClient,private route:ActivatedRoute) { }
  signup(data: any) {
    return this.httpclient.post(this.url + "/moderateur/register", data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })
  }
  
  signin(data: any) {

      return this.httpclient.post(this.url + "/moderateur/login", data, {
        headers: new HttpHeaders().set("content-type", "application/json")
      })
  }

}
