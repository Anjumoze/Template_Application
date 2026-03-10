import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string = '';
  roleName: string = '';

  constructor(private msalService: MsalService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || '';
    // Subscribe to auth status changes to update header when role is set
    this.authService.authStatus$.subscribe((status) => {
      if (status) {
        this.roleName = localStorage.getItem('role') || '';
      }
    });
  }
  logoutRequest() {
    localStorage.clear();
    this.msalService.logout();
  }
  isLoggedIn() {
    if (this.msalService.instance.getActiveAccount() != null) {
      this.userName = localStorage.getItem('userName') || '';
      return true
    } else {
      return false
    }
  }
}
