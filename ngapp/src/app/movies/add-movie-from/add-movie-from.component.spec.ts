import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieFromComponent } from './add-movie-from.component';

describe('AddMovieFromComponent', () => {
  let component: AddMovieFromComponent;
  let fixture: ComponentFixture<AddMovieFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
