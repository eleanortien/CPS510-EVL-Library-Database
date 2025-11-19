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

    bookData: Book[] = [{book_ID: 1, title: 'john', author: 'me', date: new Date, genre: 'spook'}];
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
            this.bookData = data;
        });
        this.table.getBookCopyTable().subscribe(data => {
            this.bookCopyData = data;
        });
        this.table.getBorrowsTable().subscribe(data => {
            this.borrowsData = data;
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
            item.book_ID.toString().includes(lowerCaseSearchValue) 
            || item.author.toLowerCase().includes(lowerCaseSearchValue)
            || item.title.toLowerCase().includes(lowerCaseSearchValue)
            || item.genre.toLowerCase().includes(lowerCaseSearchValue)
            || item.date.toString().includes(lowerCaseSearchValue) 
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
            item.copy_ID.toString().includes(lowerCaseSearchValue) 
            || item.book_ID.toString().includes(lowerCaseSearchValue) 
            || item.damaged.toString().includes(lowerCaseSearchValue)
            || item.located_at.toString().includes(lowerCaseSearchValue)
            || item.provided_by.toString().includes(lowerCaseSearchValue) 
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
            item.book_ID.toString().includes(lowerCaseSearchValue) 
            || item.copy_ID.toString().includes(lowerCaseSearchValue) 
            || item.member_ID.toString().includes(lowerCaseSearchValue)
            || item.due_date.toString().includes(lowerCaseSearchValue) 
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
            item.branch_ID.toString().includes(lowerCaseSearchValue) 
            || item.branch_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.address_street_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.address_street.toLowerCase().includes(lowerCaseSearchValue)
            || item.address_city.toLowerCase().includes(lowerCaseSearchValue) 
            || item.address_province.toLowerCase().includes(lowerCaseSearchValue) 
            || item.address_postal_code.toLowerCase().includes(lowerCaseSearchValue) 
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
            item.staff_ID.toString().includes(lowerCaseSearchValue) 
            || item.first_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.last_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.email.toLowerCase().includes(lowerCaseSearchValue)
            || item.staff_role.toLowerCase().includes(lowerCaseSearchValue) 
            || item.phone_number.toLowerCase().includes(lowerCaseSearchValue) 
            || item.managed_by.toString().includes(lowerCaseSearchValue) 
            || item.works_at.toString().includes(lowerCaseSearchValue) 
            || item.salary.toString().includes(lowerCaseSearchValue)
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
            item.member_ID.toString().includes(lowerCaseSearchValue) 
            || item.username.toLowerCase().includes(lowerCaseSearchValue)
            || item.email.toLowerCase().includes(lowerCaseSearchValue)
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
            item.staff_ID.toString().includes(lowerCaseSearchValue) 
            || item.first_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.last_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.email.toLowerCase().includes(lowerCaseSearchValue)
            || item.staff_role.toLowerCase().includes(lowerCaseSearchValue) 
            || item.phone_number.toLowerCase().includes(lowerCaseSearchValue) 
            || item.managed_by.toString().includes(lowerCaseSearchValue) 
            || item.works_at.toString().includes(lowerCaseSearchValue) 
            || item.hourly_rate.toString().includes(lowerCaseSearchValue)
            || item.bi_weekly_hours.toString().includes(lowerCaseSearchValue)
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
            item.book_ID.toString().includes(lowerCaseSearchValue) 
            || item.place_in_queue.toString().includes(lowerCaseSearchValue) 
            || item.member_ID.toString().includes(lowerCaseSearchValue) 
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
            item.supplier_ID.toString().includes(lowerCaseSearchValue) 
            || item.phone_number.toLowerCase().includes(lowerCaseSearchValue) 
            || item.email.toLowerCase().includes(lowerCaseSearchValue) 
            || item.supplier_name.toLowerCase().includes(lowerCaseSearchValue) 
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
            item.staff_ID.toString().includes(lowerCaseSearchValue) 
            || item.first_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.last_name.toLowerCase().includes(lowerCaseSearchValue)
            || item.email.toLowerCase().includes(lowerCaseSearchValue)
            || item.staff_role.toLowerCase().includes(lowerCaseSearchValue) 
            || item.phone_number.toLowerCase().includes(lowerCaseSearchValue) 
            || item.managed_by.toString().includes(lowerCaseSearchValue) 
            || item.works_at.toString().includes(lowerCaseSearchValue) 
            || item.total_hours.toString().includes(lowerCaseSearchValue)
        );

        return filteredResults;
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
