import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/constants/urls';
import { Query1 } from '../shared/models/advance-queries/Query1';
import { Query2 } from '../shared/models/advance-queries/Query2';
import { Query3 } from '../shared/models/advance-queries/Query3';
import { Query4 } from '../shared/models/advance-queries/Query4';
import { Query5 } from '../shared/models/advance-queries/Query5';
import { Query6 } from '../shared/models/advance-queries/Query6';

export const QUERY_URL = BASE_URL + '/query/';

@Injectable({
    providedIn: 'root'
})
export class AdvanceQueryService {
    
    constructor(private http: HttpClient) {}

    getQuery1Table(): Observable<Query1[]> {
        return this.http.get<Query1[]>(QUERY_URL + 1);
    }

    getQuery2Table(): Observable<Query2[]> {
        return this.http.get<Query2[]>(QUERY_URL + 1);
    }

    getQuery3Table(): Observable<Query3[]> {
        return this.http.get<Query3[]>(QUERY_URL + 1);
    }
    
    getQuery4Table(): Observable<Query4[]> {
        return this.http.get<Query4[]>(QUERY_URL + 1);
    }
    
    getQuery5Table(): Observable<Query5[]> {
        return this.http.get<Query5[]>(QUERY_URL + 1);
    }
    
    getQuery6Table(): Observable<Query6[]> {
        return this.http.get<Query6[]>(QUERY_URL + 1);
    }
}
