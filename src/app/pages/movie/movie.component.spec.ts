import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponentPage } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponentPage;
  let fixture: ComponentFixture<MovieComponentPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponentPage]
    });
    fixture = TestBed.createComponent(MovieComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
