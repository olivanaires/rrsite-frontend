import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PropertyService {

    private urlCretate = '/api/property/create';
    private urlLoadAll = '/api/property/loadAll';

    constructor(private http: HttpClient) { }

    create(property: Property) {
        return this.http.post(this.urlCretate, property);
    }

    loadAll() {
        return this.http.get(this.urlLoadAll);
    }

}
