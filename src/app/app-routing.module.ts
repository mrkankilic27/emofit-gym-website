import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { OnWorkComponent } from './onWork/onWork.component';
import { PriceComponent } from './Price/Price.component';

const routes: Routes = [
  {path:'calisma',component:OnWorkComponent},
  {path:'price',component:PriceComponent},
  {path:'login',component:AuthComponent},
  {path:'home',component:HomeComponent},
  {path:'**',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
