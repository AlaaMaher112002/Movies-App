import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { RegsterationComponent } from './regsteration/regsteration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { WatchPipe } from './watch.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { SearchNamePipe } from './search-name.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvShowComponent,
    PeopleComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    DetailsComponent,
    RegsterationComponent,
    WatchPipe,
    SeemorePipe,
    SearchPipe,
    SearchNamePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




 }
