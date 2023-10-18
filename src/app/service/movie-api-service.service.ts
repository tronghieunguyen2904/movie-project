import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://api.themoviedb.org/3"
  apiKey = "f09447a46ee2cc6c4fc8958b5976f269"

  MovieApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  SearchApiData(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${data.movieName}`)
  }

  DetailMovieApiData(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  DetailTvApiData(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`)
  }

}
