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

@Injectable({
  providedIn: 'root'
})
export class TableService {
    
  constructor(private http: HttpClient) {}
  
}
