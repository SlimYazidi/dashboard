import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post(this.baseURL+'/login', data);
  }

  register(data){
      return this.http.post(this.baseURL+'/register', data);
  }
}
