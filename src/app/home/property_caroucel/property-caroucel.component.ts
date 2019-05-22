import { Component, OnInit } from '@angular/core';
import { _ } from 'underscore';
import { PropertyService } from 'src/app/service/property.service';

@Component({
    selector: 'app-property-caroucel',
    templateUrl: './property-caroucel.component.html',
    styleUrls: ['./property-caroucel.component.css']
})
export class PropertyCaroucelComponent implements OnInit {

    interval = 3000;
    pauseOnHover = false;
    showNavigationArrows = false;
    showNavigationIndicators = false;
    properties: Array<Array<Property>>;

    constructor(
        private propertyService: PropertyService) {
    }

    ngOnInit() {
        this.propertyService.loadAll().subscribe((res: Array<Property>) => { this.properties = _.chunk(res, 3) });
    }

}