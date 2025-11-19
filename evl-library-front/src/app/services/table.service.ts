import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/constants/urls';
import { Book } from '../shared/models/Book';
import { BookCopy } from '../shared/models/BookCopy';
import { Borrows } from '../shared/models/Borrows';
import { Branch } from '../shared/models/Branch';
import { FullTimeStaff } from '../shared/models/FullTimeStaff';
import { PartTimeStaff } from '../shared/models/PartTimeStaf';
import { LibMember } from '../shared/models/LibMember';
import { QueueHold } from '../shared/models/QueueHold';
import { Supplier } from '../shared/models/Supplier';
import { VolunteerStaff } from '../shared/models/VolunteerStaf';

export const TABLE_URL = BASE_URL + '/table/';
export const QUERY_URL = BASE_URL + '/query/';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    constructor(private http: HttpClient) {}

    getBookTable(): Observable<Book[]> {
        return this.http.get<Book[]>(TABLE_URL + 1);
    }
    
    getBookCopyTable(): Observable<BookCopy[]> {
        return this.http.get<BookCopy[]>(TABLE_URL + 1);
    }
    
    getBorrowsTable(): Observable<Borrows[]> {
        return this.http.get<Borrows[]>(TABLE_URL + 1);
    }
    
    getBranchTable(): Observable<Branch[]> {
        return this.http.get<Branch[]>(TABLE_URL + 1);
    }
    
    getFullTimeTable(): Observable<FullTimeStaff[]> {
        return this.http.get<FullTimeStaff[]>(TABLE_URL + 1);
    }
    
    getPartTimeTable(): Observable<PartTimeStaff[]> {
        return this.http.get<PartTimeStaff[]>(TABLE_URL + 1);
    }
    
    getLibMemberTable(): Observable<LibMember[]> {
        return this.http.get<LibMember[]>(TABLE_URL + 1);
    }
    
    getQueueHoldTable(): Observable<QueueHold[]> {
        return this.http.get<QueueHold[]>(TABLE_URL + 1);
    }
    
    getSupplierTable(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>(TABLE_URL + 1);
    }
    
    getVolunteerTable(): Observable<VolunteerStaff[]> {
        return this.http.get<VolunteerStaff[]>(TABLE_URL + 1);
    }
    
    getQueryTable(which: number): Observable<any[]> {
        return this.http.get<any[]>(QUERY_URL + which);
    }

    updateTable(code: string): Observable<any[]> {
        return this.http.post<any[]>(TABLE_URL, code);
    }
}