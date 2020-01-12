import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	baseUrl = 'http://localhost:3000/auth';
	isAuthenticated = false;

  	constructor(private http: HttpClient) { }

  	login(user: User) {
		this.isAuthenticated = true;
		return this.http.post<User>(`${this.baseUrl}/login`, user);
	}
	  
	logout() {
		this.isAuthenticated = false;
		return this.http.get(`${this.baseUrl}/logout`);
    }
}
