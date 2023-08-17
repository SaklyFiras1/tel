import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Globalconstants } from 'src/shared/global-constants';
import { NgToastService } from 'ng-angular-popup';
import { UsersService } from '../Services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  responsemessage: any;
  constructor(private ngxloader:NgxUiLoaderService,private toast:NgToastService,private userService:UsersService,   private router: Router,private formbuilder:FormBuilder){
  


  }
  signinforms:any=FormGroup;
  ngOnInit(): void {
    this.signinforms = this.formbuilder.group({
      email: [null, [Validators.required, Validators.pattern(Globalconstants.emailRegex)]],
      password: [null, [Validators.required]]
    })
  }


 

  handlesubmit() {
    this.ngxloader.start();
    var formdata = this.signinforms.value; 
    
    this.userService.signin(formdata).subscribe((response: any) => {
      this.ngxloader.stop()
 
      this.responsemessage = response?.message
      localStorage.setItem('token', response.mytoken
      )
      console.log('response',response)

        this.toast.success({detail:"connection réussi.",summary:'Welcome admin',sticky:true, position: 'topRight'});
  
    
    
      
      

      setTimeout(() => {
      

    
 

  
  
  
      this.router.navigate(['dashboard'])  }, 2000)

    }, (error: any) => {
      this.ngxloader.stop()

      this.toast.error({detail:"Something wrong.Try again",summary:'your email or password is incorrect',sticky:true, position: 'topRight'});
   
    }
    )

}
}
