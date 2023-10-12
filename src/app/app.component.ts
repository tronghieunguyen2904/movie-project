import { Component } from '@angular/core';
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
}
