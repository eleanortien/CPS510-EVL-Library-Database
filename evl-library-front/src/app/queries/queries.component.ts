import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queries',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.scss',
})
export class QueriesComponent {

    constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['/']);
    }

    runQuery(which: number) {
        const QUERY_URL = "/queries/";
        switch (which) {
            case 1:
                this.router.navigate([QUERY_URL + 1]);
                break;
            case 2:
                this.router.navigate([QUERY_URL + 2]);
                break;
            case 3:
                this.router.navigate([QUERY_URL + 3]);
                break;
            case 4:
                this.router.navigate([QUERY_URL + 4]);
                break;
            case 5:
                this.router.navigate([QUERY_URL + 5]);
                break;
            case 6:
                this.router.navigate([QUERY_URL + 6]);
                break;
            case 7:
                this.router.navigate([QUERY_URL + 7]);
                break;
            case 8:
                this.router.navigate([QUERY_URL + 8]);
                break;
            case 9:
                this.router.navigate([QUERY_URL + 9]);
                break;
            case 10:
                this.router.navigate([QUERY_URL + 10]);
                break;
            case 11:
                this.router.navigate([QUERY_URL + 11]);
                break;
            case 12:
                this.router.navigate([QUERY_URL + 12]);
                break;
            case 13:
                this.router.navigate([QUERY_URL + 13]);
                break;
            case 14:
                this.router.navigate([QUERY_URL + 14]);
                break;
            case 15:
                this.router.navigate([QUERY_URL + 15]);
                break;
            case 16:
                this.router.navigate([QUERY_URL + 16]);
                break;
            case 17:
                this.router.navigate([QUERY_URL + 17]);
                break;
            case 18:
                this.router.navigate([QUERY_URL + 18]);
                break;
        }
    }
}
