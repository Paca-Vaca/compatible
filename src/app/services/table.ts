import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Table } from '../interfaces/table';

@Injectable()
export default class TableService {
    constructor(private http: Http) {}
    getData(): Observable<{ colorsArray: Table[] }> {
        return this.http.get('./assets/data.json').delay(3000).map(data => data.json());
    }
}
