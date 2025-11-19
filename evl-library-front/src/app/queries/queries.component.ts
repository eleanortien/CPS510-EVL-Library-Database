import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { SimpleQueryService } from '../services/simple-queries.service';
import { AdvanceQueryService } from '../services/advance-queries.service copy';

@Component({
  selector: 'app-queries',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.scss',
})
export class QueriesComponent {

    constructor(private router: Router, private simple: SimpleQueryService, private advance: AdvanceQueryService) {}

    goBack() {
        this.router.navigate(['/']);
    }

    runQuery(which: number) {
        switch (which) {
            case 1:
                this.simple.getQuery1Table();
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
        }
    }
}
