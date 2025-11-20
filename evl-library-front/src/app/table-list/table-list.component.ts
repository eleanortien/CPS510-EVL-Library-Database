import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TableService } from '../services/table.service';
import { Book } from '../shared/models/Book';
import { BookCopy } from '../shared/models/BookCopy';
import { Borrows } from '../shared/models/Borrows';
import { Branch } from '../shared/models/Branch';
import { FullTimeStaff } from '../shared/models/FullTimeStaff';
import { LibMember } from '../shared/models/LibMember';
import { PartTimeStaff } from '../shared/models/PartTimeStaf';
import { QueueHold } from '../shared/models/QueueHold';
import { Supplier } from '../shared/models/Supplier';
import { VolunteerStaff } from '../shared/models/VolunteerStaf';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-table-list',
    imports: [MatButtonModule, MatTableModule, MatInputModule, MatFormFieldModule, FormsModule],
    templateUrl: './table-list.component.html',
    styleUrl: './table-list.component.scss',
})
export class TableListComponent {

    bookData: Book[] = [];
    bookCopyData: BookCopy[] = [];
    borrowsData: Borrows[] = [];
    branchData: Branch[] = [];
    fullTimeData: FullTimeStaff[] = [];
    libMemberData: LibMember[] = [];
    partTimeData: PartTimeStaff[] = [];
    queueData: QueueHold[] = [];
    supplierData: Supplier[] = [];
    volunteerData: VolunteerStaff[] = [];
    displayedColumns: string[][] = [['book_ID', 'title', 'author', 'date', 'genre'],
                                    ['copy_ID', 'book_ID', 'damaged', 'located_at', 'provided_by'],
                                    ['book_ID', 'copy_ID', 'member_ID', 'due_date'],
                                    ['branch_ID', 'branch_name', 'address_street_name', 'address_street', 'address_city', 'address_province', 'address_postal_code'],
                                    ['staff_ID', 'first_name', 'last_name', 'email', 'staff_role', 'phone_number', 'managed_by', 'works_at', 'salary'],
                                    ['member_ID', 'username', 'email'],
                                    ['staff_ID', 'first_name', 'last_name', 'email', 'staff_role', 'phone_number', 'managed_by', 'works_at', 'hourly_rate', 'bi_weekly_hours'],
                                    ['book_ID', 'place_in_queue', 'member_ID'],
                                    ['supplier_ID', 'phone_number', 'email', 'supplier_name'],
                                    ['staff_ID', 'first_name', 'last_name', 'email', 'staff_role', 'phone_number', 'managed_by', 'works_at', 'total_hours']];
    bookFilter: string = '';
    bookCopyFilter: string = '';
    borrowsFilter: string = '';
    branchFilter: string = '';
    fullTimeFilter: string = '';
    libMemberFilter: string = '';
    partTimeFilter: string = '';
    queueFilter: string = '';
    supplierFilter: string = '';
    volunteerFilter: string = '';

    constructor(private router: Router, private table: TableService) {
        this.table.getBookTable().subscribe(data => {
            this.bookData = data.map(book => ({
                ...book,
                PUBLISH_DATE: new Date(book.PUBLISH_DATE).toLocaleDateString('en-CA')
            }));
        });
        this.table.getBookCopyTable().subscribe(data => {
            this.bookCopyData = data;
        });
        this.table.getBorrowsTable().subscribe(data => {
            this.borrowsData = data.map(book => ({
                ...book,
                DUE_DATE: new Date(book.DUE_DATE).toLocaleDateString('en-CA')
            }));;
        });
        this.table.getBranchTable().subscribe(data => {
            this.branchData = data;
        });
        this.table.getFullTimeTable().subscribe(data => {
            this.fullTimeData = data;
        });
        this.table.getLibMemberTable().subscribe(data => {
            this.libMemberData = data;
        });
        this.table.getPartTimeTable().subscribe(data => {
            this.partTimeData = data;
        });
        this.table.getQueueHoldTable().subscribe(data => {
            this.queueData = data;
        });
        this.table.getSupplierTable().subscribe(data => {
            this.supplierData = data;
        });
        this.table.getVolunteerTable().subscribe(data => {
            this.volunteerData = data;
        });
    }

    filterBooks(search: string): Book[] {
        let filteredResults: Book[] = this.bookData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.BOOK_ID.toString().includes(lowerCaseSearchValue) 
            || item.TITLE.toLowerCase().includes(lowerCaseSearchValue)
            || item.AUTHOR.toLowerCase().includes(lowerCaseSearchValue)
            || item.GENRE.toLowerCase().includes(lowerCaseSearchValue)
            || item.PUBLISH_DATE.toString().includes(lowerCaseSearchValue) 
        );

        return filteredResults;
    }

    filterBookCopies(search: string): BookCopy[] {
        let filteredResults: BookCopy[] = this.bookCopyData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.COPY_ID.toString().includes(lowerCaseSearchValue) 
            || item.BOOK_ID.toString().includes(lowerCaseSearchValue) 
            || item.DAMAGED.toString().includes(lowerCaseSearchValue)
            || item.LOCATED_AT.toString().includes(lowerCaseSearchValue)
            || item.PROVIDED_BY.toString().includes(lowerCaseSearchValue) 
        );

        return filteredResults;
    }
    
    filterBorrows(search: string): Borrows[] {
        let filteredResults: Borrows[] = this.borrowsData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.BOOK_ID.toString().includes(lowerCaseSearchValue) 
            || item.COPY_ID.toString().includes(lowerCaseSearchValue) 
            || item.MEMBER_ID.toString().includes(lowerCaseSearchValue)
            || item.DUE_DATE.toString().includes(lowerCaseSearchValue) 
        );

        return filteredResults;
    }

    filterBranches(search: string): Branch[] {
        let filteredResults: Branch[] = this.branchData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.BRANCH_ID.toString().includes(lowerCaseSearchValue) 
            || item.BRANCH_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.ADDRESS_STREET_NUMBER.toLowerCase().includes(lowerCaseSearchValue)
            || item.ADDRESS_STREET.toLowerCase().includes(lowerCaseSearchValue)
            || item.ADDRESS_CITY.toLowerCase().includes(lowerCaseSearchValue) 
            || item.ADDRESS_PROVINCE.toLowerCase().includes(lowerCaseSearchValue) 
            || item.ADDRESS_POSTAL_CODE.toLowerCase().includes(lowerCaseSearchValue) 
        );

        return filteredResults;
    }
    
    filterFullTimers(search: string): FullTimeStaff[] {
        let filteredResults: FullTimeStaff[] = this.fullTimeData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.STAFF_ID.toString().includes(lowerCaseSearchValue) 
            || item.FIRST_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.LAST_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.EMAIL.toLowerCase().includes(lowerCaseSearchValue)
            || item.STAFF_ROLE.toLowerCase().includes(lowerCaseSearchValue) 
            || item.PHONE_NUMBER.toLowerCase().includes(lowerCaseSearchValue) 
            || item.MANAGED_BY.toString().includes(lowerCaseSearchValue) 
            || item.WORKS_AT.toString().includes(lowerCaseSearchValue) 
            || item.SALARY.toString().includes(lowerCaseSearchValue)
        );

        return filteredResults;
    }
    
    filterLibMembers(search: string): LibMember[] {
        let filteredResults: LibMember[] = this.libMemberData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.MEMBER_ID.toString().includes(lowerCaseSearchValue) 
            || item.USERNAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.EMAIL.toLowerCase().includes(lowerCaseSearchValue)
        );

        return filteredResults;
    }
    
    filterPartTimers(search: string): PartTimeStaff[] {
        let filteredResults: PartTimeStaff[] = this.partTimeData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.STAFF_ID.toString().includes(lowerCaseSearchValue) 
            || item.FIRST_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.LAST_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.EMAIL.toLowerCase().includes(lowerCaseSearchValue)
            || item.STAFF_ROLE.toLowerCase().includes(lowerCaseSearchValue) 
            || item.PHONE_NUMBER.toLowerCase().includes(lowerCaseSearchValue) 
            || item.MANAGED_BY.toString().includes(lowerCaseSearchValue) 
            || item.WORKS_AT.toString().includes(lowerCaseSearchValue) 
            || item.HOURLY_RATE.toString().includes(lowerCaseSearchValue)
            || item.BI_WEEKLY_HOURS.toString().includes(lowerCaseSearchValue)
        );

        return filteredResults;
    }

    filterQueueHolds(search: string): QueueHold[] {
        let filteredResults: QueueHold[] = this.queueData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.BOOK_ID.toString().includes(lowerCaseSearchValue) 
            || item.PLACE_IN_QUEUE.toString().includes(lowerCaseSearchValue) 
            || item.MEMBER_ID.toString().includes(lowerCaseSearchValue) 
        );

        return filteredResults;
    }

    filterSuppliers(search: string): Supplier[] {
        let filteredResults: Supplier[] = this.supplierData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.SUPPLIER_ID.toString().includes(lowerCaseSearchValue) 
            || item.PHONE_NUMBER.toLowerCase().includes(lowerCaseSearchValue) 
            || item.EMAIL.toLowerCase().includes(lowerCaseSearchValue) 
            || item.SUPPLIER_NAME.toLowerCase().includes(lowerCaseSearchValue) 
        );

        return filteredResults;
    }
    
    filterVolunteers(search: string): VolunteerStaff[] {
        let filteredResults: VolunteerStaff[] = this.volunteerData;

        if (!search) {
            return filteredResults;
        }

        const lowerCaseSearchValue = search.toLowerCase();
        filteredResults = filteredResults.filter(item =>
            item.STAFF_ID.toString().includes(lowerCaseSearchValue) 
            || item.FIRST_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.LAST_NAME.toLowerCase().includes(lowerCaseSearchValue)
            || item.EMAIL.toLowerCase().includes(lowerCaseSearchValue)
            || item.STAFF_ROLE.toLowerCase().includes(lowerCaseSearchValue) 
            || item.PHONE_NUMBER.toLowerCase().includes(lowerCaseSearchValue) 
            || item.MANAGED_BY.toString().includes(lowerCaseSearchValue) 
            || item.WORKS_AT.toString().includes(lowerCaseSearchValue) 
            || item.TOTAL_HOURS.toString().includes(lowerCaseSearchValue)
        );

        return filteredResults;
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
