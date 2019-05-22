import { Component, ViewChild, OnInit } from '@angular/core';
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
export class MainNavComponent implements OnInit {

    @ViewChild(MatSidenav) drawer: MatSidenav;
    @ViewChild(CdkScrollable) scrollable: CdkScrollable;

    isAuth: boolean;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.isAuth = this.authService.getIsAuth();
    }

}
