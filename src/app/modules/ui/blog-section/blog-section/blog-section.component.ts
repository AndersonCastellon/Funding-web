import { Component, OnInit, Input } from '@angular/core';
import { BlogEntry } from 'src/app/models/blog-entry.model';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styles: [],
})
export class BlogSectionComponent implements OnInit {
  @Input() public blogEntries: BlogEntry[];
  constructor() {}

  ngOnInit(): void {}
}
