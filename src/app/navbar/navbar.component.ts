import { Component } from '@angular/core';
import { SnackbarService } from '../Services/snackbar.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Globalconstants } from 'src/shared/global-constants';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  responsemessage:any
  constructor( private ngxservice:NgxUiLoaderService,private toast:NgToastService,private router:Router) {
  }
 
   ngOnInit(): void {
 
 
   }
  log(){
    this.ngxservice.start();

     localStorage.clear()
 
      this.responsemessage = Globalconstants.log

        this.toast.info({detail:" Vous êtes deconnecté ",sticky:true,position:'topRight'});
  
    
      this.ngxservice.stop()
      this.router.navigate([''])

    }

}
