import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TokenStorageService } from '../services/token-storage-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private tokenStorageService: TokenStorageService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {}

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['auth/login'])
    this.loginService._isLoggedIn$.next(false);
  }
}
