import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
import { ADVANCED_QUERY_URL, BASE_URL, CREATE_TABLES_URL, DROP_TABLES_URL, POPULATE_TABLES_URL, RUN_USER_SQL_URL, SIMPLE_QUERY_URL, VIEW_TABLES_URL } from '../shared/constants/urls';

export const TABLE_URL = BASE_URL + '/table/';
export const QUERY_URL = BASE_URL + '/query/';

@Injectable({
    providedIn: 'root'
})
export class TableService {

    constructor(private http: HttpClient) {}

    dropTables(): Observable<string> {
        return this.http.get<string>(DROP_TABLES_URL);
    }

    createTables(): Observable<string> {
        return this.http.get<string>(CREATE_TABLES_URL);
    }
    
    populateTables(): Observable<string> {
        return this.http.get<string>(POPULATE_TABLES_URL);
    }

    getBookTable(): Observable<Book[]> {
        return this.http.get<Book[]>(VIEW_TABLES_URL("book"));
    }
    
    getBookCopyTable(): Observable<BookCopy[]> {
        return this.http.get<BookCopy[]>(VIEW_TABLES_URL("book_copy"));
    }
    
    getBorrowsTable(): Observable<Borrows[]> {
        return this.http.get<Borrows[]>(VIEW_TABLES_URL("borrows"));
    }
    
    getBranchTable(): Observable<Branch[]> {
        return this.http.get<Branch[]>(VIEW_TABLES_URL("branch"));
    }
    
    getFullTimeTable(): Observable<FullTimeStaff[]> {
        return this.http.get<FullTimeStaff[]>(VIEW_TABLES_URL("full_time_staff"));
    }
    
    getPartTimeTable(): Observable<PartTimeStaff[]> {
        return this.http.get<PartTimeStaff[]>(VIEW_TABLES_URL("part_time_staff"));
    }
    
    getLibMemberTable(): Observable<LibMember[]> {
        return this.http.get<LibMember[]>(VIEW_TABLES_URL("lib_member"));
    }
    
    getQueueHoldTable(): Observable<QueueHold[]> {
        return this.http.get<QueueHold[]>(VIEW_TABLES_URL("queue_hold"));
    }
    
    getSupplierTable(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>(VIEW_TABLES_URL("supplier"));
    }
    
    getVolunteerTable(): Observable<VolunteerStaff[]> {
        return this.http.get<VolunteerStaff[]>(VIEW_TABLES_URL("volunteer_staff"));
    }
    
    getSimpleQueryTable(which: number): Observable<any[]> {
        return this.http.get<any[]>(SIMPLE_QUERY_URL(which));
    }

    getAdvanceQueryTable(which: number): Observable<any[]> {
        return this.http.get<any[]>(ADVANCED_QUERY_URL(which));
    }

    updateTable(code: string): Observable<any[]> {
        return this.http.post<any[]>(RUN_USER_SQL_URL, {sqlCommand: code});
    }
}