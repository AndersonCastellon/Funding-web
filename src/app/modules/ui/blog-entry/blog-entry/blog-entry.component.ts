import { Component, OnInit, Input } from '@angular/core';
import { BlogEntry } from 'src/app/models/blog-entry.model';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
})
export class BlogEntryComponent implements OnInit {
  @Input() public blogEntry: BlogEntry;
  constructor() {}

  ngOnInit(): void {}
}
