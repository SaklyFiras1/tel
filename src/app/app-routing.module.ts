import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AjouterEvenementtComponent } from './ajouter-evenementt/ajouter-evenementt.component';

const routes: Routes = [


  {
    path: '', component: LoginComponent,pathMatch:'full'

  },
  
  {
    path: 'register', component: RegisterComponent

  },
  {
    path: 'dashboard', component: DashboardComponent

  },
  {
    path: 'evenements', component: EvenementComponent

  },
  
  {
    path: 'ajouter_evenement', component: AjouterEvenementtComponent,pathMatch:'full'

  },
  
  {
    path: 'Forget-password', component:ForgetPasswordComponent

  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
