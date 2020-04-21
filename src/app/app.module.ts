import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './containers';
import { TemplateModule } from './modules/template/template.module';

@NgModule({
  declarations: [AppComponent, MainContainerComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
