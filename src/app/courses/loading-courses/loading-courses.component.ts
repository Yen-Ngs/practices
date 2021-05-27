import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from 'src/app/actions/Courses.action';
import { CoursesModel } from 'src/app/models/CoursesModel';
import { getCourses } from 'src/app/selectors/courses.selector';
import { CoursesState } from 'src/app/state-reducers/courses.state';

@Component({
  selector: 'app-loading-courses',
  templateUrl: './loading-courses.component.html',
  styleUrls: ['./loading-courses.component.scss']
})
export class LoadingCoursesComponent implements OnInit {

  courses:Observable<CoursesModel[]>;

  constructor(private store: Store<CoursesState>) {}

  ngOnInit(): void {
    this.courses = this.store.select(getCourses )
    this.store.dispatch(loadCourses())
    console.log(this.courses)
  
  }

}
