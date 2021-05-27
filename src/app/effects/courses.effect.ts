import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import {getCoursesDetailsSuccess, loadCourses, loadCoursesDetails, loadCoursesSuccess } from "../actions/Courses.action";
import { CoursesServices } from "../services/courses.service";


@Injectable({
    providedIn:'root'
})
export class CoursesEffects{
  constructor(private action$:Actions, private coursesService: CoursesServices){}

  loadCourse$ = createEffect(()=>{
      return this.action$.pipe(
          ofType(loadCourses),
          mergeMap((action)=>{
              return this.coursesService.getCourses().pipe(map((courses)=>{
                  return loadCoursesSuccess({courses})
              })
          )
            })
  );
        })
        getCoursesDetails$ = createEffect(()=>{
            return this.action$.pipe(
                ofType(loadCoursesDetails),
                mergeMap((action)=>{
                    return this.coursesService.getDetails(action.maKhoaHoc).
                    pipe(map((coursesDetails)=>{
                        console.log(coursesDetails);
                        return getCoursesDetailsSuccess({coursesDetails})
                        

                    }
                    )
                )})
            )
        })
    
    }
