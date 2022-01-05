import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authGuard/auth.guard';

const routes: Routes = [
{path:'search',component:SearchComponent,canActivate: [AuthGuard]},
{path:'login',component:LoginComponent},
{path:"",redirectTo:'/login',pathMatch:"full"}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [ SearchComponent, LoginComponent ]