import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    images: Array<UploadedFile>;

    constructor(private fileService: FileService, private router: Router, private authService: AuthService) {

    }

    ngOnInit() {
        if (this.authService.getIsAuth()) {
            this.router.navigateByUrl('/dashboard');
        } else {
            this.fileService.loadAll().subscribe((res: Array<UploadedFile>) => { this.images = res });
        }
    }

}