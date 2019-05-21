import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Role } from '../model/role';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    title = 'Login'

    constructor(private app: AppComponent,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.router.navigateByUrl("/");
        }
    }

    login(user) {
        this.authService.login(user)
            .subscribe(
                (user: User) => {
                    this.app.isUserAutenticated = true;
                    this.authService.storeUser(user);
                    this.authService.setIsAuth(true);
                    this.router.navigateByUrl("/");
                },
                (ex: HttpErrorResponse) => {
                    this.app.changeSuccessMessage('success', ex.message);
                });;
    }
}
