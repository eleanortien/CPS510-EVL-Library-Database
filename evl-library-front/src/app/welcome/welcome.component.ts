import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { TableService } from '../services/table.service';

@Component({
    selector: 'app-welcome',
    imports: [MatButtonModule],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
    constructor (private router: Router, private table: TableService) {};
    
    tables = true;

    rederect (where: string) {
        this.router.navigate(['/' + where]);
    }

    drop() {
        this.table.dropTables().subscribe(_ => {
            console.log("dropped");
            this.tables = false;
        })
    }

    create() {
        this.table.createTables().subscribe(_ => {
            console.log("created");
            this.tables = true;
        })
    }

    populate() {
        this.table.populateTables().subscribe(_ => {
            console.log("poped");
        })
    }
}
