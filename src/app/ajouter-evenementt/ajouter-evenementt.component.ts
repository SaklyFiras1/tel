import { Component,OnInit } from '@angular/core';
import { EvenementsService } from '../Services/evenements.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { Globalconstants } from 'src/shared/global-constants';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-evenementt',
  templateUrl: './ajouter-evenementt.component.html',
  styleUrls: ['./ajouter-evenementt.component.css']
})
export class AjouterEvenementtComponent implements OnInit {
image:any
  eventform:any=FormGroup
  selectedmage:any='Upload cover (280 x 600)'
  constructor(private ngxservice:NgxUiLoaderService,private toast:NgToastService,private eventService:EvenementsService,   private router: Router,private formbuilder:FormBuilder){
  }
    ngOnInit(): void {
      this.eventform=this.formbuilder.group({  
        nomEvent:[null,[Validators.required]],
       lieu: [null,[Validators.required]],
    Description:[null,[Validators.required]],
       image:[null,[Validators.required]],
      nombrbillet:[null,[Validators.required]],
        dateEvent:[null,[Validators.required]],
        
      })
      
      }
      selectedImage: any

      onFileSelected(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files[0]) {
          const file = inputElement.files[0];
          this.previewImage(file);
          this.eventform.patchValue({
            image: file
          });
        }
      }
    
      private previewImage(file: File): void {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    
    handlepost(){
      this.ngxservice.start()
  
  const fd =new FormData()
    var form=this.eventform.value
    fd.append('nomEvent',form.nomEvent)
    fd.append('lieu',form.lieu)
    fd.append('Description',form.Description)
    fd.append('nombrbillet',form.nombrbillet)
    fd.append('dateEvent',form.dateEvent)
   
    fd.append('image', this.eventform.get('image').value);
console.log( this.eventform.get('image').value)

    this.eventService.creationevenement(fd).subscribe((response:any)=>{
      console.log(fd)
      this.ngxservice.stop()

      this.toast.info({detail:"Evènement crèer",sticky:true, position: 'topRight'});
      setTimeout(() => {
      

    
 

  
  
  
        this.router.navigate(['evenements'])  }, 2000)

  }, (error: any) => {
  this.ngxservice.stop()
  this.toast.warning({detail:"verifier vos champs",sticky:true, position: 'topRight'});

}
 
 
 
 ) }
 
}

