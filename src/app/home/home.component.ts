import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    images: Array<UploadedFile>;

    constructor(private fileService: FileService) {
    }

    ngOnInit() {
        this.fileService.loadAll().subscribe((res: Array<UploadedFile>) => { this.images = res });
    }

}