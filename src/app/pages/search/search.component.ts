import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private service:MovieApiServiceService){}

  searchResult:any = [];

  ngOnInit(): void {
    this.submitForm();
  }
  searchForm = new FormGroup({
    'movieName': new FormControl("")
  });
  submitForm(){
    this.service.SearchApiData(this.searchForm.value).subscribe((result)=>{
      this.searchResult = result.results;
      console.log(this.searchResult);
    })
  }
}
