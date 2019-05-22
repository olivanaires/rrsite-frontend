import { Component, ViewChild, OnInit } from "@angular/core";
import { FileUploader } from 'ng2-file-upload';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../service/property.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { CityService } from '../service/city.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Input } from '@angular/compiler/src/core';

@Component({
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.css']
})
export class PropertyComponent {

    title = 'Propriedade';

    @ViewChild('tabSet') tabSet: NgbTabset;

    form: NgForm;
    uploader: FileUploader;
    canNotChange: boolean = true;

    cities: Array<City>;

    constructor(
        private app: AppComponent,
        private cityService: CityService,
        private propertyService: PropertyService,
        private router: Router) {
        this.cityService.loadAll().subscribe(res => {
            this.cities = res;
        });
    }

    save(form: NgForm) {
        console.log(form.value);
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