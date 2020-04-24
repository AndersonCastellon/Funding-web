import { Injectable } from '@angular/core';
import { BLOG_ENTRIES } from '../../../core/data';

@Injectable({
  providedIn: 'root',
})
export class BlogEntriesService {
  constructor() {}

  getBlogEntries() {
    return BLOG_ENTRIES;
  }
}
