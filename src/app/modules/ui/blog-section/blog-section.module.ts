import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogEntryModule } from '../blog-entry/blog-entry.module';

@NgModule({
  declarations: [BlogSectionComponent],
  imports: [CommonModule, BlogEntryModule],
  exports: [BlogSectionComponent],
})
export class BlogSectionModule {}
