import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
    constructor(private service:MovieApiServiceService, private router:ActivatedRoute) {}

    detailMovieApiResult:any = [];

    ngOnInit(): void {
      let getParamId = this.router.snapshot.paramMap.get('id');   
      this.getDetailMovie(getParamId);
    }


    getDetailMovie(id:any){
      let getParamMedia = this.router.snapshot.paramMap.get('media'); 
      if(getParamMedia === "movie"){        
        this.service.DetailMovieApiData(id).subscribe((result)=>{
          this.detailMovieApiResult = result;
        })
      }else{
        this.service.DetailTvApiData(id).subscribe((result)=>{
          this.detailMovieApiResult = result;
        })
      }
    }
}
