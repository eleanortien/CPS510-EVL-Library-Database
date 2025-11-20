import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableService } from '../services/table.service';

@Component({
    selector: 'app-welcome',
    imports: [MatButtonModule,MatInputModule,MatCardModule,ReactiveFormsModule],
    templateUrl: './update-page.component.html',
    styleUrl: './update-page.component.scss',
})
export class UpdatePageComponent {
    readonly code = new FormControl('');

    constructor (private router: Router, private table: TableService) {};
    
    update() {
        var code = this.code.getRawValue();
        if (code) {
            this.table.updateTable(code).subscribe(_ => {
                console.log("updated");
            });
        }
        
        this.code.reset('');
    }

    back() {
        this.router.navigate(['/']);
    }
}
