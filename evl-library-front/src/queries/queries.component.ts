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
}
