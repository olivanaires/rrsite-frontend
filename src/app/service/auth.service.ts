import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Role } from '../model/role';
import { Subject } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private siginUrl = '/api/auth/signin';
  private sigoutUrl = '/api/auth/signout';
  private signupUrl = '/api/auth/signup';

  private isUserAutenticated: boolean = false;

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.siginUrl, user);
  }

  logout() {
    this.removeUser();
    return this.http.get(this.sigoutUrl);
  }

  register(user) {
    return this.http.post(this.signupUrl, user);
  }

  storeUser(user: User) {
    var roles = user.roles.map((role: Role) => { return role.name }).join(", ");
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("username", user.username);
    localStorage.setItem("email", user.email);
    localStorage.setItem("roles", roles);
    localStorage.setItem("token", user.token);
  }

  removeUser() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("roles");
    localStorage.removeItem("token");
  }

  autoAuthUser() {
    if (!localStorage.getItem("token")) {
      return;
    }
    this.isUserAutenticated = true;
  }

  getIsAuth() {
    return this.isUserAutenticated;
  }

  setIsAuth(value) {
    this.isUserAutenticated = value;
  }

}
