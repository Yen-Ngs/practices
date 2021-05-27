import { createAction, props } from "@ngrx/store";
import { CoursesModel } from "../models/CoursesModel";

export const LOAD_COURSES = '[courses page] loading courses';
export const LOADING_COURSES_SUCCESS ='[courses page] loading courses success';
export const LOAD_COURSES_DETAILS = '[courses page] get courses details'
export const GET_COURSES_DETAILS_SUCCESS = '[courses page] get courses details success'


export const loadCourses = createAction(LOAD_COURSES);
export const loadCoursesSuccess = createAction(LOADING_COURSES_SUCCESS, props<{courses:CoursesModel[]}>())
export const loadCoursesDetails = createAction(LOAD_COURSES_DETAILS, props<{maKhoaHoc: string}>() );
export const getCoursesDetailsSuccess = createAction(GET_COURSES_DETAILS_SUCCESS, props<{coursesDetails:CoursesModel}>())