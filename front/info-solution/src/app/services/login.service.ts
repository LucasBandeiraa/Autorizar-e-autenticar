import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SignInResponse } from './interfaces/User';
import { TokenStorageService } from './token-storage-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
    const logged = !!this.tokenStorageService.getToken();
    this._isLoggedIn$.next(logged);

    if (logged) {
      const user = this.tokenStorageService.getUser();
      // this.role = user.role;
      // this.showAdminBoard = this.role.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.role.includes('ROLE_MODERATOR');
      // this.username = user.username;
    }
  }

  /** GET heroes from the server */
  SignIn(username: string, password: string): Observable<SignInResponse> {
    return this.http.post<SignInResponse>("https://localhost:7293/v1/login", { username, password }).pipe(
    tap((response: any) => {
      this._isLoggedIn$.next(true)
    }))
  }
}
