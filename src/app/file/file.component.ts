import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { FileService } from '../service/file.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;

    uploader: FileUploader;
    isDropOver: boolean;
    images: Array<UploadedFile>;

    constructor(
        private dashboard: DashboardComponent,
        private fileService: FileService) { }

    ngOnInit(): void {
        this.loadImages();

        const headers = [
            { name: 'Accept', value: 'application/json' },
            { name: 'Authorization', value: localStorage.getItem("token") }
        ];
        this.uploader = new FileUploader({ url: 'api/file/upload', autoUpload: true, headers: headers });
        this.uploader.onErrorItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
            console.log(response);
        }
        this.uploader.onSuccessItem = () => {
            this.dashboard.changeSuccessMessage('success', 'File uploaded');
            this.loadImages();
        };
    }

    fileOverAnother(e: any): void {
        this.isDropOver = e;
    }

    fileClicked() {
        this.fileInput.nativeElement.click();
    }

    loadImages() {
        this.fileService.loadAll().subscribe((res: Array<UploadedFile>) => { this.images = res });
    }

}