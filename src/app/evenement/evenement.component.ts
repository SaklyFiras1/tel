import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Globalconstants } from 'src/shared/global-constants';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { EvenementsService } from '../Services/evenements.service';
import { Event } from 'src/models/eventmodel';
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})

export class EvenementComponent implements OnInit {
  events:Event[]=[]
  constructor(private ngxservice:NgxUiLoaderService,private toast:NgToastService,private eventService:EvenementsService,   private router: Router,private formbuilder:FormBuilder){
 
} 

ngOnInit(): void {
  this.allevents()
}
allevents(){
  this.ngxservice.start()
  this.eventService.allevenements().subscribe((response:any)=>{

this.events=response
this.ngxservice.stop()
console.log(this.events)
  })
}
}