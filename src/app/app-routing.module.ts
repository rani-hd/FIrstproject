import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path:'search',component:SearchComponent},
{path:'login',component:LoginComponent},
{path:"",redirectTo:'/login',pathMatch:"full"}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [ SearchComponent, LoginComponent ]