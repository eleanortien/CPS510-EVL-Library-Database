import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table-list',
  imports: [MatButtonModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss',
})
export class TableListComponent {

    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['/']);
    }
}
