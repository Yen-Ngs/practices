import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "../state-reducers/courses.state";

export const  COURSES_STATE_NAME = 'courses';

const getCoursesState = createFeatureSelector<CoursesState>(COURSES_STATE_NAME);

export const getCourses = createSelector(getCoursesState,(state)=>{
    return state.courses
})
export const getCoursesDetails = createSelector(getCoursesState, (state)=>{
    return state.coursesDetails
})
export const getCourseById = createSelector(getCoursesState, (state, props)=>{
 return state.courses.find((courses)=> courses.maKhoaHoc === props.maKhoaHoc)
})