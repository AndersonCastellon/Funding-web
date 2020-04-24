import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogEntryComponent],
  imports: [CommonModule, RouterModule],
  exports: [BlogEntryComponent],
})
export class BlogEntryModule {}
