import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// Nebular
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbWindowModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbUserModule,
  NbContextMenuModule,
  NbMenuModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

// Containers
import { MainContainerComponent } from './containers';

// Template components
import { HeaderComponent, FooterComponent } from './components';
import { LoginFormComponent, SigninFormComponent } from './components/forms/';

// Directives
import { GoogleSigninDirective } from './core/directives/google-signin.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    SigninFormComponent,
    GoogleSigninDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbWindowModule.forRoot({ windowClass: 'window' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
