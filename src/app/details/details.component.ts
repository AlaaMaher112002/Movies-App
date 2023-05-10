import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  currentId:number=0;
  mediaType:string='';
  movieDetail:any={};
  ImgBaseUrl:string='https://image.tmdb.org/t/p/original'

constructor(private _ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService){
  this.currentId=this._ActivatedRoute.snapshot.params['id'];
  this.mediaType=this._ActivatedRoute.snapshot.params['mediaType'];
}
getTrendingDetails(){
  this._TrendingService.getTrendingDetails(this.mediaType,this.currentId).subscribe((response)=>{
    this.movieDetail=response;
  })
}




ngOnInit(): void {
this.getTrendingDetails();

}
}
