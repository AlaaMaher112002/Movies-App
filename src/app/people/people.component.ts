import { Component ,OnInit} from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{
  ImgBaseUrl:string='https://image.tmdb.org/t/p/original';
  peopleList:any[]=[];
 constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService){}

 getPeople(){
  this.spinner.show()
  this._TrendingService.getTrendingPeople().subscribe(
    (response)=>{
      this.peopleList=response.results;
      this.spinner.hide()
    }
  )
}




ngOnInit(): void {
this.getPeople()
}

}
