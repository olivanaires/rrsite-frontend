import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    images: Array<UploadedFile>;
    _success = new Subject<string>();
    type: string;
    message: string;

    constructor(private fileService: FileService, private router: Router, private authService: AuthService) {

    }

    ngOnInit() {
        if (this.authService.getIsAuth()) {
            this.router.navigateByUrl('/dashboard');
        } else {
            this.fileService.loadAll().subscribe((res: Array<UploadedFile>) => { this.images = res });
        }

        this._success.pipe(
            debounceTime(5000)
        ).subscribe(() => this.message = null);
    }

    public changeSuccessMessage(type: string, message: string) {
        console.log("home")
        this.message = message;
        this.type = type;
        this._success.next();
    }
}