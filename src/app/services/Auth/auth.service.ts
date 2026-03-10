import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authStatus$ = new BehaviorSubject<boolean | null>(null);

  private authObservable$?: Observable<any>; // cached observable
  constructor(private http: HttpClient) { }

  /**
  * Retrieves user capability and entitlement information from the backend.
  * @returns Observable with user capability data
  */
  authenticate(): Observable<any> {
    if (!this.authObservable$) {
      let url = environment.authUrl + `Capability/getUserCapability/${environment.appDetails.appId}`;
      this.authObservable$ = this.http.get<any>(url).pipe(
        shareReplay(1)
      );
    }
    return this.authObservable$;
  }
}
