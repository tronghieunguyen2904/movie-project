import { Component, HostListener } from '@angular/core';
import { faMagnifyingGlass, faUser, faBell, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-project';
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faBell = faBell;
  faStar = faStar;
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        this.navbg = {
          'background-color' : '#141414',
        }
    }else{
        this.navbg = {}
    }
  }
}
