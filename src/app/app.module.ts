import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponentPage } from './pages/movie/movie.component';
import { MovieComponent } from './pages/home/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponentPage,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
