import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  authenticate(data: any ) {
      let headers =  new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      })
      const options = { headers: headers };
      return this.http.post(`${environment.apiUrl}authenticate`, data, options)
  }

  isLoggedin(){
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    console.log(!!token && !!role)
    return !!token && !!role
  }
}