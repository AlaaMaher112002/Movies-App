import { Component,OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService){}

movieList:any[]=[];
ImgBaseUrl:string='https://image.tmdb.org/t/p/original';
getMovie(pageNumber:number){
  this.spinner.show()
  this._TrendingService.getTrendingMoviePagination('movie',pageNumber).subscribe(
    (response)=>{
      this.movieList=response.results;
      this.spinner.hide()

    }
  )
}

ngOnInit(): void {
  this.getMovie(1);
}



}
