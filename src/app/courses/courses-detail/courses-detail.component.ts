import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCoursesDetailsSuccess, loadCoursesDetails } from 'src/app/actions/Courses.action';
import { CoursesModel } from 'src/app/models/CoursesModel';
import { getCoursesDetails } from 'src/app/selectors/courses.selector';
import { CoursesServices } from 'src/app/services/courses.service';
import { CoursesState } from 'src/app/state-reducers/courses.state';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  coursesDetails:Observable< CoursesModel>;
  maKhoaHoc: Params


  constructor(private store: Store<CoursesState>,
              private route: ActivatedRoute, private CoursesService: CoursesServices) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe((value)=>{{this.maKhoaHoc = value
      console.log(this.maKhoaHoc);}
      
    })
    this.coursesDetails = this.store.select(getCoursesDetails)
    console.log(this.coursesDetails);
    this.store.dispatch(loadCoursesDetails(this.maKhoaHoc))
    
  }


  getCourseDetails(){
    
    

  }
}
