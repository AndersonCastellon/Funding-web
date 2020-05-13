import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Nebular
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbWindowModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

// Containers
import { MainContainerComponent } from './containers';

// Template components
import { HeaderComponent, FooterComponent } from './components';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbWindowModule.forRoot({
      windowClass: 'window',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
