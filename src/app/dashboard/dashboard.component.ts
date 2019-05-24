import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    isAuth: boolean;
    _success = new Subject<string>();
    type: string;
    message: string;

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

        this._success.pipe(
            debounceTime(5000)
        ).subscribe(() => this.message = null);
    }



    public changeSuccessMessage(type: string, message: string) {
        this.message = message;
        this.type = type;
        this._success.next();
    }

}