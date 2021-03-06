import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { LoginFormComponent } from '../forms/login-form/login-form.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import { SigninFormComponent } from '../forms';
import { User } from 'src/app/models';
import { filter, map } from 'rxjs/operators';
import { AuthFormsFlowService } from 'src/app/core/services/auth-forms-flow.service';

import {
  NbWindowService,
  NbWindowRef,
  NB_WINDOW,
  NbMenuService,
} from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private loginFormRef: NbWindowRef;
  private signinFormRef: NbWindowRef;

  private toLogin: Subscription;
  private toSignin: Subscription;

  private authOb: Subscription;

  user: User;
  contextMenuTag = 'auth-context-menu';

  items = [
    { title: 'Mis campañas' },
    { title: 'Mis contribuciones' },
    { title: 'Perfil' },
    { title: 'Cerrar sesión' },
  ];

  constructor(
    private windowService: NbWindowService,
    private authS: AuthService,
    private nbMenuService: NbMenuService,
    private authFormsFlow: AuthFormsFlowService,
    @Inject(NB_WINDOW) private window: any
  ) {}

  ngOnInit(): void {
    this.authS.isLogged()
      ? (this.user = this.authS.getCurrentUser())
      : this.authS.logout();

    this.formsFlow();

    this.authOb = this.authS.authUser.subscribe((user) => {
      this.user = user;
      this.loginFormClose();
      this.signinFormClose();
    });

    this.onClickContextMenu();
  }

  onLogin() {
    this.loginFormRef = this.windowService.open(LoginFormComponent);
  }

  onSignin() {
    this.signinFormRef = this.windowService.open(SigninFormComponent);
  }

  private formsFlow() {
    this.toLogin = this.authFormsFlow.toLoginObs.subscribe(() => {
      this.signinFormClose();
      this.onLogin();
    });

    this.toSignin = this.authFormsFlow.toSigninObs.subscribe(() => {
      this.loginFormRef.close();
      this.onSignin();
    });
  }

  private loginFormClose() {
    if (this.loginFormRef) {
      if (this.user && this.user.google) {
        this.window.location.reload();
      } else {
        this.loginFormRef.close();
      }
    }
  }

  private signinFormClose() {
    if (this.signinFormRef) {
      this.signinFormRef.close();
    }
  }

  private onClickContextMenu() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === this.contextMenuTag),
        map(({ item: { title } }) => title)
      )
      .subscribe((option: string) => {
        this.contextMenuRouter(option);
      });
  }

  private contextMenuRouter(option: string) {
    switch (option) {
      case 'Mis campañas':
        break;
      case 'Mis contribuciones':
        break;
      case 'Perfil':
        break;
      case 'Cerrar sesión':
        this.authS.logout();
        break;
    }
  }

  ngOnDestroy() {
    this.authOb.unsubscribe();
    this.toLogin.unsubscribe();
    this.toSignin.unsubscribe();
  }
}
