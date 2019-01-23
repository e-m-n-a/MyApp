import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  connectedUser;
  constructor(private http: HttpClient, private authService: AuthService) { }

  login(user) {
    console.log(user)
    return this.http.post('http://chehir.tn:3000/emna/login', user.value)
  }

  register(user) {
    return this.http.post('http://chehir.tn:3000/emna/register', user.value)
  }

  getUser(id) {
    return this.http.get('http://chehir.tn:3000/emna/user/' + id)
  }
  updateUser(user) {
    return this.http.post('http://chehir.tn:3000/emna/update/' + user._id, user)

  }
}


