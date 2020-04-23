import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SlideSectionModule } from '../ui/slide-section/slide-section.module';

const ROUTES: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SlideSectionModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
