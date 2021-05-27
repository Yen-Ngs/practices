import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { CoursesModel } from "../models/CoursesModel";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";



@Injectable({
providedIn:"root",
})

export class CoursesServices{
    constructor(private http:HttpClient){}
    getCourses(){
        return this.http.get<CoursesModel[]>(`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`)
        .pipe(map((data)=>{
            const courses: CoursesModel[]=[];
            for(let key in data){
                courses.push({...data[key], maKhoaHoc:key})
            }
            return courses
        }))
    }
    getDetails(maKhoaHoc:string){
        return this.http.get<CoursesModel>
        (`https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
}