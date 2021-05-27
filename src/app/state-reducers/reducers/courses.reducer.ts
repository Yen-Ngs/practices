import { createReducer, on } from "@ngrx/store";
import { getCoursesDetailsSuccess, loadCoursesSuccess} from "src/app/actions/Courses.action";
import { initialState } from "../courses.state";

const _coursesReducer = createReducer(initialState, 
    on(loadCoursesSuccess, (state,action)=>{
        return{
            ...state,
            courses: action.courses
        }
    }),on(getCoursesDetailsSuccess,(state,action)=>{
        return{
            ...state,
            coursesDetails: action.coursesDetails
        }
    })

    )

export function coursesReducer(state,action){
    return _coursesReducer(state,action)
}