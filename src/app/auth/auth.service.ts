import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticate = false;

  login(user: string): boolean {
    const storedName = localStorage.getItem('name') || '';
    const name = JSON.parse(storedName);
    if (name === user.toLowerCase()) {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }

  isAuthenticated():any{
    return this.isAuthenticate;
  }
}
