import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent}from'./home/home.component';
import{UserRegistrationComponent}from './user-registration/user-registration.component';
import{UserProfileComponent}from './user-profile/user-profile.component';

const routes: Routes = [
{
path:'home',
component:HomeComponent
},

{
path:'user-registration',

component:UserRegistrationComponent
},

{
path:'user-profile',
component:UserProfileComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
