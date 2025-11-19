import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { BASE_URL } from '../shared/constants/urls';

export const USER_LOGIN_URL = BASE_URL + "/login";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    
    constructor(private http:HttpClient) {}

    login(userLogin:User):Observable<User>{
        return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
        tap({
            next: (user) =>{
                localStorage.setItem('User', JSON.stringify(user));
            },
            error: (errorResponse) => {
            }
        })
        );
    }

    logout() {
        localStorage.removeItem('User');
        window.location.reload();
    }
    
    getUser(): User | null{
        const user = localStorage.getItem('User');
        if(user) return JSON.parse(user) as User;
        return null;
    }
}