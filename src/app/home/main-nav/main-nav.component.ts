import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { CdkScrollable } from '@angular/cdk/overlay';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

    @ViewChild(MatSidenav) drawer: MatSidenav;
    @ViewChild(CdkScrollable) scrollable: CdkScrollable;

    isAuth: boolean;

    constructor(private app: AppComponent, private authService: AuthService, private router: Router) {
        this.isAuth = this.app.isUserAutenticated;
    }

    logout() {
        this.authService.logout().subscribe(res => {
            this.app.isUserAutenticated = false;
            this.authService.removeUser();
            this.authService.setIsAuth(true);
            this.router.navigate(["/"]);
            location.reload();
        });
    }

    goToBanner() {
        this.scrollView(0);
    }

    goToProperties() {
        this.scrollView(847);
    }

    goToRegister() {
        this.scrollView(0);
    }

    private scrollView(value: number) {
        this.scrollable.scrollTo({ bottom: value, behavior: 'smooth' });
        this.drawer.toggle();
    }

}
