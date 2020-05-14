import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbWindowService, NbWindowRef } from '@nebular/theme';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private loginFormRef: NbWindowRef;
  private authOb: Subscription;

  constructor(
    private windowService: NbWindowService,
    private authS: AuthService
  ) {}

  ngOnInit(): void {
    this.authOb = this.authS.tokenBehavior.subscribe(() => {
      this.loginFormClose();
    });
  }

  onLogin() {
    this.loginFormRef = this.windowService.open(LoginFormComponent);
  }

  loginFormClose() {
    if (this.loginFormRef) {
      this.loginFormRef.close();
    }
  }

  ngOnDestroy() {
    this.authOb.unsubscribe();
  }
}
