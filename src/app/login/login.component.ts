import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    title = 'Acessar Sistema'

    constructor(private app: AppComponent,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        if (this.authService.getIsAuth()) {
            this.router.navigateByUrl("/dashboard");
        }
    }

    login(user) {
        this.authService.login(user)
            .subscribe(
                (user: User) => {
                    this.authService.storeUser(user);
                    this.router.navigateByUrl("/dashboard");
                },
                (ex: HttpErrorResponse) => {
                    // this.app.changeSuccessMessage('success', ex.message);
                });;
    }
}
