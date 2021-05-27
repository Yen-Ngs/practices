import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCoursesComponent } from './loading-courses/loading-courses.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { DeleteCoursesComponent } from './delete-courses/delete-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from '../effects/courses.effect';
import { coursesReducer } from '../state-reducers/reducers/courses.reducer';
import { COURSES_STATE_NAME } from '../selectors/courses.selector';
import { StoreModule } from '@ngrx/store';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';


const routes : Routes=[
  {path:'', component:LoadingCoursesComponent},
    {path:'details/:maKhoaHoc', component:CoursesDetailComponent}
    
]
@NgModule({
  declarations: [
    LoadingCoursesComponent,
    AddCoursesComponent,
    DeleteCoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CoursesEffects]),
    StoreModule.forFeature(COURSES_STATE_NAME, coursesReducer),

  ]
})
export class CoursesModule { }
