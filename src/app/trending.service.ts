import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient ) { }

  getTrendingMoviePagination(mediaType:any,pageNumber:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
    }


getTrending(mediaType:any):Observable<any>{
return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
}

getTrendingDetails(mediaType:any,id:number):Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
  }

  getTrendingPeople():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=1`)
    }



}
