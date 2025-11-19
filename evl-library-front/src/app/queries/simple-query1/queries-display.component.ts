import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TableService } from '../../services/table.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-queries',
  imports: [MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './queries-display.component.html',
  styleUrl: '../queries.component.scss',
})
export class QueriesDisplayComponent {

    private route = inject(ActivatedRoute);
    queryId = this.route.snapshot.paramMap.get('id') || 0;
    data: any[] = [];
    displayedColumns: string[][] = [['book_ID', 'title', 'author', 'genre', 'Number_Available'],
                                    ['member_ID', 'username', 'title', 'copy_ID', 'Days_Overdue'],
                                    ['staff_ID', 'first_name', 'last_name', 'Num_Part_Time_Managees', 'Num_Volunteer_Managees', 'Num_Full_Time_Managees', 'Total_Managees'],
                                    ['staff_ID', 'first_name', 'last_name', 'works_at', 'branch_name'],
                                    ['staff_ID', 'first_name', 'last_name', 'total_hours'],
                                    ['address_city', 'Num_Of_Branches'],
                                    ['title', 'author', 'publish_date', 'genre'],
                                    ['member_ID', 'username', 'NUM_BORROWED'],
                                    ['branch_ID', 'NUM_BOOKS'],
                                    ['supplier_ID', 'NUM_BOOKS', 'TOTAL_VOLUMES'],
                                    ['member_ID', 'book_ID', 'place_in_queue'],
                                    ['supplier_ID', 'supplier_name', 'email', 'phone_number'],
                                    ['username', 'title', 'place_in_queue'],
                                    ['branch_id', 'branch_name', 'full_address', 'number_of_staff', 'number_of_distinct_books'],
                                    ['book_ID', 'title', 'POPULARITY'],
                                    ['username'],
                                    ['supplier_id', 'supplier_name', 'donation_percentage'],
                                    ['title']];
    dataSource = this.data;

    constructor(private router: Router, private simple: TableService) {
        if (this.queryId) {
            this.simple.getQueryTable(+this.queryId).subscribe(data => {
                this.data = data;
            });
        }
    }

    goBack() {
        this.router.navigate(['/queries']);
    }
}
