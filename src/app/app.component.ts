import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { EventType } from '@azure/msal-browser';
import { AuthService } from './services/Auth/auth.service';
import { LoaderService } from 'loader';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateApplication';
  isLogin: boolean = false;
  constructor(private msalService: MsalService, private authService: AuthService, private loaderService: LoaderService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.invokeLoaderComponent(true);
    });
    const accounts = this.msalService.instance.getAllAccounts();
    if (accounts.length > 0) {
      this.msalService.instance.setActiveAccount(accounts[0]);
      localStorage.setItem('userName', String(this.msalService.instance.getActiveAccount()?.name));
      localStorage.setItem('userEmail', String(this.msalService.instance.getActiveAccount()?.username));
      this.authenticate();
    } else {
      this.msalService.instance.addEventCallback((event: any) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
          const account = event.payload.account;
          this.msalService.instance.setActiveAccount(account);
        }
      });

      this.msalService.instance
        .handleRedirectPromise()
        .then((res) => {
          const account = this.msalService.instance.getActiveAccount();
          if (!account) {
            this.msalService.loginRedirect();
          } else {
            if (res != null && res.account != null) {
              this.msalService.instance.setActiveAccount(res.account);
              localStorage.setItem('userName', String(this.msalService.instance.getActiveAccount()?.name));
              localStorage.setItem('userEmail', String(this.msalService.instance.getActiveAccount()?.username));
              this.authenticate();
            } else {
              this.msalService.loginRedirect();
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  /**
  * Subscribes to authentication service to authenticate user and check if user has entitlement to access application.
  * If user has entitlement, sets user info in local storage and sets auth status to true.
  * If user does not have entitlement, removes user info from local storage,
  * sets auth status to false and navigates to unauthorized page.
  */
  authenticate() {
    this.authService.authenticate().subscribe({
      next: (res: any) => {
        if (res.HasEntitlement) {
          localStorage.setItem('role', res.application_role_name);
          localStorage.setItem('owner_Id', res.owner_Id);
          localStorage.setItem('department', res.department);
          //if (res?.capabilities) this.authService.setCapability(res.capabilities);
          this.isLogin = true;
          this.authService.authStatus$.next(true);

          // If currently on unauthorized page but now authorized, go to home
          if (this.router.url.includes('unauthorized')) {
            this.router.navigate(['/']);
          }
        }
        else {
          localStorage.removeItem('role');
          localStorage.removeItem('owner_Id');
          localStorage.removeItem('department');
          this.loaderService.invokeLoaderComponent(false);
          this.isLogin = true;
          this.authService.authStatus$.next(false);

          // Explicitly redirect to unauthorized if failed
          this.router.navigate(['unauthorized']);
        }
      },
      error: () => {
        this.isLogin = true;
        this.loaderService.invokeLoaderComponent(false);
        this.authService.authStatus$.next(false);
        this.router.navigate(['unauthorized']);
      },
      complete: () => {
        this.isLogin = true;
        this.loaderService.invokeLoaderComponent(false);
      }
    });
  }
}
