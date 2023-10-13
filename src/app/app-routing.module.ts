import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponentPage } from './pages/movie/movie.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movie',component:MovieComponentPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
