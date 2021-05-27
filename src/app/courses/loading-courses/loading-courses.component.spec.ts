import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCoursesComponent } from './loading-courses.component';

describe('LoadingCoursesComponent', () => {
  let component: LoadingCoursesComponent;
  let fixture: ComponentFixture<LoadingCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
