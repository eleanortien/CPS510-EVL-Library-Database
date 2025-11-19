import { Routes } from '@angular/router';
import { QueriesComponent } from '../queries/queries.component';
import { TableListComponent } from '../table-list/table-list.component';
import { WelcomeComponent } from '../welcome/welcome.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent },
    {path: 'queries', component: QueriesComponent },
    {path: 'table-list', component: TableListComponent },
];
