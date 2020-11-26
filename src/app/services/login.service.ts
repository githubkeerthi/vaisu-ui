import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URl } from 'src/app/app-constants';
import {map} from 'rxjs/operators';
import { TokenDetails } from '../domain/token-details';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }

  JWTAuthenticationService(username, password){
     console.log("Connecting and authenticating login !!")
    return this.http.post<TokenDetails>(`${API_URl}/authenticate`,{
      username,
      password
    });
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authentication');
    return !(user == null)
  }

  logout(){
    sessionStorage.removeItem('authentication');
  }
}
