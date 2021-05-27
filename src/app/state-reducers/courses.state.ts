import { CoursesModel } from "../models/CoursesModel";

export interface CoursesState{
    courses: CoursesModel[],
    coursesDetails: CoursesModel
}
export const initialState : CoursesState = {
    courses: null,
    coursesDetails: null

}