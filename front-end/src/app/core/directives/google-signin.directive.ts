import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { environment } from 'src/environments/environment';
declare const gapi: any;

@Directive({
  selector: '[appGoogleSignin]',
})
export class GoogleSigninDirective implements OnInit {
  private CLIENT_ID = environment.googleClientID;
  private auth2: any;

  @Output() signin: EventEmitter<string>;
  constructor(private element: ElementRef) {
    this.signin = new EventEmitter();
  }

  ngOnInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });

      this.attachSignin();
    });
  }

  private attachSignin() {
    this.auth2.attachClickHandler(
      this.element.nativeElement,
      {},
      (googleUser: any) => {
        const gToken = googleUser.getAuthResponse().id_token;
        this.signin.emit(gToken);
      }
    );
  }
}
