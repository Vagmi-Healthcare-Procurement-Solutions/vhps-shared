import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Login } from './model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _username: string;
  _token: string;

  constructor(private httpClient: HttpClient) { }

  signUp(newUser: User) : Observable<User> {
    return this.httpClient.post<User>("http://vhpsbackend-env.eba-abgymrkp.us-east-1.elasticbeanstalk.com:9040/register", newUser);
  }

  login(login: Login) : Observable<any> {
    return this.httpClient.post<any>("http://vhpsbackend-env.eba-abgymrkp.us-east-1.elasticbeanstalk.com:9040/login", login);
  }

  logout() {
    this._username = '';
    this._token = '';
  }

  set userName(username: string) {
    this._username = username;
  }

  get userName(): string {
    return this._username;
  }

  set token(token: string) {
    this._token = token;
  }

  get token(): string {
    return this._token;
  }

}
