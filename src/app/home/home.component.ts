import { Component,OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService){}

term:string='';

movieList:any[]=[];
ImgBaseUrl:string='https://image.tmdb.org/t/p/original';

getMovie(){
  this.spinner.show()
  this._TrendingService.getTrending('movie').subscribe(
    (response)=>{
      this.movieList=response.results.splice(1,10);

    }
  )
}

tvShowList:any[]=[];
getTvShow(){
  this._TrendingService.getTrending('tv').subscribe(
    (response)=>{
      this.tvShowList=response.results.splice(1,10);
      this.spinner.hide();
    }
  )
}

ngOnInit(): void {
  this.getMovie();
  this.getTvShow();
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  margin:20,
  dots: false,
  navSpeed: 400,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 8
    }
  },
  nav: true
}



}
