import { Component, ViewChild } from "@angular/core";
import { FileUploader } from 'ng2-file-upload';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../service/property.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './property.component.html'
})
export class PropertyComponent {

    title = 'Propriedade';

    @ViewChild('tabSet') tabSet: NgbTabset;

    form: NgForm;
    uploader: FileUploader;
    canNotChange: boolean = true;

    constructor(
        private app: AppComponent,
        private propertyService: PropertyService,
        private router: Router) { }

    save(form: NgForm) {
        this.propertyService.create(form.value)
            .subscribe((res: number) => {
                this.setPropertyIdToUploaderURL(res);
                this.canNotChange = false;
                this.form = form;
                this.tabSet.select('imagesTab');
                this.app.changeSuccessMessage("success", "Propriedade cadastrada com sucesso!");
            });

    }

    private setPropertyIdToUploaderURL(propertyId: number) {
        const headers = [
            { name: 'Accept', value: 'application/json' },
            { name: 'Authorization', value: localStorage.getItem("token") }
        ];
        this.uploader = new FileUploader(
            {
                url: 'api/property/uploadImage/' + propertyId,
                headers: headers,
                removeAfterUpload: true
            });
        this.uploader.onCompleteAll = () => {
            this.app.changeSuccessMessage("success", "Imagens enviadas com sucesso!");
            this.form.reset();
            this.tabSet.select('formTab');
        }
    }

    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'imagesTab' && this.canNotChange) {
            $event.preventDefault();
        }
    }

}