import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './shared/models/User';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'evl-library-front';
    user: User | null = null;

    constructor(private router: Router, private userService: UserService) {
        this.userService.user$.subscribe(user => {
            this.user = user;

            if (this.user) {
                this.router.navigate(['/']);
            }
            else {
                this.router.navigate(['/login']);
            }
        });

    }

    logout() {
        this.user = null;
        localStorage.removeItem('User');
        this.userService.logout();
        this.router.navigate(['/login']);
    }

    rederect(where: string) {
        this.router.navigate(['/' + where]);
    }
}
