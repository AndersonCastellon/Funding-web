import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private build: FormBuilder, private authS: AuthService) {}

  ngOnInit(): void {
    this.signinForm = this.build.group(
      {
        name: ['', Validators.compose([Validators.required])],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password1: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        password2: ['', Validators.compose([Validators.required])],
      },
      { validators: this.differentPassword('password1', 'password2') }
    );

    this.signinForm.setValue({
      name: 'Test 2',
      email: 'test2@test.com',
      password1: '123456',
      password2: '123456',
    });
  }

  signin() {
    if (this.signinForm.invalid) {
      return;
    }

    const user: User = {
      name: this.signinForm.value.name,
      email: this.signinForm.value.email,
      password: this.signinForm.value.password1,
    };

    this.authS.signin(user).subscribe();
  }

  private differentPassword(pass1: string, pass2: string) {
    return (group: FormGroup) => {
      const pwd1 = group.controls[pass1].value;
      const pwd2 = group.controls[pass2].value;

      if (pwd1 === pwd2) {
        return null;
      }
      return {
        differentPassword: true,
      };
    };
  }
}
