import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/constants/urls';
import { Query1 } from '../shared/models/simple-queries/Query1';
import { Query2 } from '../shared/models/simple-queries/Query2';
import { Query3 } from '../shared/models/simple-queries/Query3';
import { Query4 } from '../shared/models/simple-queries/Query4';
import { Query5 } from '../shared/models/simple-queries/Query5';
import { Query6 } from '../shared/models/simple-queries/Query6';
import { Query7 } from '../shared/models/simple-queries/Query7';
import { Query8 } from '../shared/models/simple-queries/Query8';
import { Query9 } from '../shared/models/simple-queries/Query9';
import { Query10 } from '../shared/models/simple-queries/Query10';
import { Query11 } from '../shared/models/simple-queries/Query11';
import { Query12 } from '../shared/models/simple-queries/Query12';

export const QUERY_URL = BASE_URL + '/query/';

@Injectable({
    providedIn: 'root'
})
export class SimpleQueryService {
    
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
    
    getQuery7Table(): Observable<Query7[]> {
        return this.http.get<Query7[]>(QUERY_URL + 1);
    }
    
    getQuery8Table(): Observable<Query8[]> {
        return this.http.get<Query8[]>(QUERY_URL + 1);
    }
    
    getQuery9Table(): Observable<Query9[]> {
        return this.http.get<Query9[]>(QUERY_URL + 1);
    }
    
    getQuery10Table(): Observable<Query10[]> {
        return this.http.get<Query10[]>(QUERY_URL + 1);
    }
    
    getQuery11Table(): Observable<Query11[]> {
        return this.http.get<Query11[]>(QUERY_URL + 1);
    }
    
    getQuery12Table(): Observable<Query12[]> {
        return this.http.get<Query12 []>(QUERY_URL + 1);
    }
}
