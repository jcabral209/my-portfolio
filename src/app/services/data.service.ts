import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   key = '1Ejdt6pVF6dPgDD2Hv6kQSREN0DMXQo3O12s1lFfMbnA';
   apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
   apiURLpt2 = '/1/public/values?alt=json';

  constructor(public http: HttpClient) { }

  getURL(): Observable<any> {
    console.log(this.apiURLpt1 + this.key + this.apiURLpt2);
    return this.http.get<any>(this.apiURLpt1 + this.key + this.apiURLpt2);
  }
}

// https://spreadsheets.google.com/feeds/list/1Ejdt6pVF6dPgDD2Hv6kQSREN0DMXQo3O12s1lFfMbnA/1/public/values?alt=json
