import { Component } from '@angular/core';
import { faMagnifyingGlass, faUser, faBell, faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faBell = faBell;
  faStar = faStar;
  faPlay = faPlay;
}
