import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { RegsterationComponent } from './regsteration/regsteration.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardGuard } from './guard.guard';


const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home',canActivate:[GuardGuard] ,component:HomeComponent},
  {path:'movies',canActivate:[GuardGuard] ,component:MoviesComponent},
  {path:'people',canActivate:[GuardGuard] ,component:PeopleComponent},
  {path:'tvShow',canActivate:[GuardGuard] ,component:TvShowComponent},
  {path:'details/:id/:mediaType' ,component:DetailsComponent},
  {path:'register' ,component:RegsterationComponent},
  {path:'login' ,component:LoginComponent},
  {path:'**' ,component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
