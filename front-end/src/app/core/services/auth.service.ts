import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from 'src/app/models';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = environment.apiUrl;
  private user: User;
  private token: string;

  public auth = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.token = localStorage.getItem('token') || null;
  }

  signin(user: User) {
    const endPoint = this.URL + '/auth/signin';
    return this.http.post(endPoint, user).pipe(
      map((resp: any) => {
        this.saveUserLocal(resp.user, resp.token);
        this.auth.next(true);
        return true;
      })
    );
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    const endPoint = this.URL + '/auth/login';
    return this.http.post(endPoint, credentials).pipe(
      map((resp: any) => {
        this.saveUserLocal(resp.user, resp.token);
        this.auth.next(true);
        return true;
      })
    );
  }

  loginGoogle(gToken: string) {}

  isLogged() {
    let isLogged = true;
    let decoded: User;

    if (!this.token) {
      isLogged = false;
    } else {
      decoded = jwt_decode(this.token);
    }

    if (!this.user || this.user._id !== decoded._id) {
      isLogged = false;
    }

    return isLogged;
  }

  private saveUserLocal(user: User, token: string) {
    this.user = user;
    this.token = token;

    localStorage.user = JSON.stringify(user);
    localStorage.token = token;
  }
}
