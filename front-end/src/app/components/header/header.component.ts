import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbWindowService, NbWindowRef } from '@nebular/theme';
import { LoginFormComponent } from '../forms/login-form/login-form.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { SigninFormComponent } from '../forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private loginFormRef: NbWindowRef;
  private signinFormRef: NbWindowRef;

  private authOb: Subscription;

  constructor(
    private windowService: NbWindowService,
    private authS: AuthService
  ) {}

  ngOnInit(): void {
    this.authOb = this.authS.auth.subscribe(() => {
      this.loginFormClose();
      this.signinFormClose();
    });
  }

  onLogin() {
    this.loginFormRef = this.windowService.open(LoginFormComponent);
  }

  onSignin() {
    this.signinFormRef = this.windowService.open(SigninFormComponent);
  }

  loginFormClose() {
    if (this.loginFormRef) {
      this.loginFormRef.close();
    }
  }

  signinFormClose() {
    if (this.signinFormRef) {
      this.signinFormRef.close();
    }
  }

  ngOnDestroy() {
    this.authOb.unsubscribe();
  }
}
