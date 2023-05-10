import { Component,OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent {
  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService){}
  tvShowList:any[]=[];
  ImgBaseUrl:string='https://image.tmdb.org/t/p/original'

  getTvShow(pageNumber:number){
    this.spinner.show()
    this._TrendingService.getTrendingMoviePagination('tv',pageNumber).subscribe(
      (response)=>{
        this.tvShowList=response.results;
        this.spinner.hide()
      }
    )
  }

  ngOnInit(): void {
    this.getTvShow(1);
}



}
