import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  url = environment.apiurl;
  id=this.route.snapshot.params['id']
  constructor(private httpclient: HttpClient,private route:ActivatedRoute) { }

   creationevenement(data: any) {
    return this.httpclient.post(this.url + "/evenement/ajout", data)
  }
 allevenements(){
    return this.httpclient.get(this.url+'/evenement/all')
  }
}
