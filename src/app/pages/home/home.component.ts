import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faUser, faBell, faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:MovieApiServiceService) { }
  
  movieApiData: any = [];
  ngOnInit():void{
    this.movieData();
  }

  movieData(){
    this.service.MovieApiData().subscribe((result)=>{
      this.movieApiData = result.results;
      console.log(this.movieApiData);
      
    })
  }
  
  // Icon
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faBell = faBell;
  faStar = faStar;
  faPlay = faPlay;

  /// carousel

}
