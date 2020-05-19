import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private build: FormBuilder, private authS: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.build.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });

    this.loginForm.setValue({
      email: 'test1@test.com',
      password: '123456',
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authS.login(credentials).subscribe();
  }

  loginGoogle(gToken: string) {
    this.authS.loginGoogle(gToken).subscribe();
  }
}
