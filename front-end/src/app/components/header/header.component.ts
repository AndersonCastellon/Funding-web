import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private windowService: NbWindowService) {}

  ngOnInit(): void {}

  onLogin() {
    this.windowService.open(LoginFormComponent);
  }
}
