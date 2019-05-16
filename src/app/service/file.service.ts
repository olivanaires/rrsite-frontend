import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private loadAllURL = '/api/file/loadAll';

  constructor(private http: HttpClient) { }

  loadAll() {
    return this.http.get(this.loadAllURL);
  }

}
