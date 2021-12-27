import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [{path:"user",component:UserComponent},
{path:'search',component:SearchComponent},
{path:"",redirectTo:'/user',pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [UserComponent, SearchComponent]