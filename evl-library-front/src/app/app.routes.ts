import { Routes } from '@angular/router';
import { QueriesComponent } from './queries/queries.component';
import { TableListComponent } from './table-list/table-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QueriesDisplayComponent } from './queries/simple-query1/queries-display.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent },
    {path: 'queries', component: QueriesComponent },
    {path: 'queries/:id', component: QueriesDisplayComponent },
    {path: 'table-list', component: TableListComponent },
    {path: 'login', component: LoginPageComponent },
];
