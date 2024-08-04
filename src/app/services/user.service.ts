import { Injectable, signal } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1/Leviatan/exercice-5/fifth-exercice-back/api/users';
  currentUserSignal = signal<User | undefined | null>(undefined);
  constructor(private http: HttpClient) { }

  authenticate(userData: any = null) {
    return this.http.post<any>(this.url + '/login', userData);
  }

  logout() {
    localStorage.setItem('token', '');
    this.currentUserSignal.set(null);
  }
}
