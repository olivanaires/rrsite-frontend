import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CityService {

    private urlLoadAll = '/api/city/loadAll';

    constructor(private http: HttpClient) { }

    loadAll() {
        return this.http.get<Array<City>>(this.urlLoadAll);
    }

}
