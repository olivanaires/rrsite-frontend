import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    isAuth: boolean;

    constructor(private authService: AuthService, private router: Router) { }

    logout() {
        this.authService.logout().subscribe(res => {
            this.authService.removeUser();
            this.router.navigateByUrl('/');
        });
    }

    ngOnInit() {
        if (this.authService.getIsAuth()) {
            this.isAuth = this.authService.getIsAuth();
        } else {
            this.router.navigateByUrl('/');
        }
    }

}