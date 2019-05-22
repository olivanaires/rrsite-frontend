import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    _success = new Subject<string>();
    type: string;
    message: string;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
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
