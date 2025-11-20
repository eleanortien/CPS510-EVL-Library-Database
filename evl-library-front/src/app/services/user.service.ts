import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { LOGIN_URL } from '../shared/constants/urls';

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
        return this.http.post<User>(LOGIN_URL, userLogin).pipe(
            tap({
                next: (answer) =>{
                    localStorage.setItem('User', JSON.stringify(answer.username));
                    this.userSubject.next(answer);
                },
                error: (errorResponse) => {
                    console.log("error :(" , errorResponse);
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