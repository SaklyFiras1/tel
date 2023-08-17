import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CanalComponent } from './canal/canal.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterEvenementtComponent } from './ajouter-evenementt/ajouter-evenementt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule,NgxUiLoaderService,NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { SnackbarService } from './Services/snackbar.service';
import { NgToastModule } from 'ng-angular-popup';
const ngxuiloaderconfig: NgxUiLoaderConfig = {


  

 "overlayColor": "rgba(78,115,223,0)",
  fgsSize: 70,
  "hasProgressBar": true,
  fgsColor:"transparent",
  "pbColor": "#4e73df",
  maxTime:200,
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    CalendarComponent,
    CanalComponent,
    EvenementComponent,
    PageNotFoundComponent,
    AjouterEvenementtComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,NgxUiLoaderModule,
    AppRoutingModule,NgToastModule,MaterialModule, HttpClientModule,FormsModule,ReactiveFormsModule,MatSnackBarModule, BrowserAnimationsModule,MatSnackBarModule,NgxUiLoaderModule.forRoot(ngxuiloaderconfig) 

  ],
  providers: [SnackbarService,MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
