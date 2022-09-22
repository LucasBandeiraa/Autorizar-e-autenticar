import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { TokenStorageService } from './services/token-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private role: string = '';
  // isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string = "";

  constructor(public loginService: LoginService) { }

  ngOnInit() {

  }

}
