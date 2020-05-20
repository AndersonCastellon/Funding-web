import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFormsFlowService {
  private toLoginSubject = new Subject<void>();
  private toSigninSubject = new Subject<void>();
  private toRecoverSubject = new Subject<void>();

  public toLoginObs = this.toLoginSubject.asObservable();
  public toSigninObs = this.toSigninSubject.asObservable();
  public toRecoverObs = this.toRecoverSubject.asObservable();

  constructor() {}

  toLogin() {
    this.toLoginSubject.next();
  }

  toSignin() {
    this.toSigninSubject.next();
  }

  toRecover() {
    this.toRecoverSubject.next();
  }
}
