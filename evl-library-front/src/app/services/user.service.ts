import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { BASE_URL } from '../shared/constants/urls';

export const USER_LOGIN_URL = BASE_URL + "/login";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userSubject = new BehaviorSubject<User | null>(this.loadUser());
    public user$ = this.userSubject.asObservable();

    private loadUser(): User | null {
        const userJson = localStorage.getItem('User');
        return userJson ? JSON.parse(userJson) : null;
    }
    
    constructor(private http:HttpClient) {}

    login(userLogin:User):Observable<User>{
        console.log(userLogin)
        // temp remove when connected
        this.userSubject.next(userLogin);
        return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
            tap({
                next: (user) =>{
                    console.log(user)
                    localStorage.setItem('User', JSON.stringify(user));
                    this.userSubject.next(user);
                },
                error: (errorResponse) => {
                }
            })
        );
    }

    logout() {
        localStorage.removeItem('User');
        this.userSubject.next(null);
    }
    
    getUser(): User | null {
        return this.userSubject.value;
    }
}