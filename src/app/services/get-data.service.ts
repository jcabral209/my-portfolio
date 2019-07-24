import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private dataService: DataService) { }

  getProjectInfo() {
    const key = '1Ejdt6pVF6dPgDD2Hv6kQSREN0DMXQo3O12s1lFfMbnA';
    const apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
    const apiURLpt2 = '/1/public/values?alt=json';
    return this.dataService
      .getURL(apiURLpt1 + key + apiURLpt2);
  }
}
// https://spreadsheets.google.com/feeds/list/1Ejdt6pVF6dPgDD2Hv6kQSREN0DMXQo3O12s1lFfMbnA/1/public/values?alt=json