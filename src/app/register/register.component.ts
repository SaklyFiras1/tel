import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Globalconstants } from 'src/shared/global-constants';
import { NgToastService } from 'ng-angular-popup';
import { UsersService } from '../Services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  responsemessage: any;
  constructor(private ngxloader:NgxUiLoaderService,private toast:NgToastService,private userService:UsersService,   private router: Router,private formbuilder:FormBuilder){
  


  }
  signupforms:any=FormGroup;
  ngOnInit(): void {
    this.signupforms = this.formbuilder.group({
      email: [null, [Validators.required, Validators.pattern(Globalconstants.emailRegex)]],
      username:  [null, [Validators.pattern(Globalconstants.nameRegex)]],
      password: [null, [Validators.required]]
    })
  }


 
  handlesubmit() {
    this.ngxloader.start();
    var formdata = this.signupforms.value;
  
    this.userService.signup(formdata).subscribe((response: any) => {
      this.ngxloader.stop()
 
      this.responsemessage = response?.message
      localStorage.setItem('token', response.token)
      this.toast.success({detail:"registration completé",summary:'tu peux connecter à votre compte',sticky:true, position: 'topRight'});

      this.router.navigate([''])

    }, (error: any) => {
      this.ngxloader.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.toast.warning({detail:"vérifier vos données",sticky:true, position: 'topRight'});
    }
    )

}
}

