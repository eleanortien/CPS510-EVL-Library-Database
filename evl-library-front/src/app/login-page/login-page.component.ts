import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/User';

@Component({
    selector: 'app-welcome',
    imports: [MatButtonModule,MatInputModule,MatCardModule,ReactiveFormsModule],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
    readonly username = new FormControl('');
    readonly password = new FormControl('');

    constructor (private router: Router, private userService: UserService) {};
    
    login() {
        var username = this.username.getRawValue();
        var password = this.password.getRawValue();
        if (username && password) {
            var userObj: User = {username: username, password: password}
            console.log(userObj);
            localStorage.setItem('User', JSON.stringify(userObj));
            //localStorage.removeItem('User');
            //this.userService.login(userObj);
            this.router.navigate(['/']);
        }
    }
}
