import { AuthorsService } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  constructor(private authorsService:AuthorsService) {
  }

  ngOnInit() {
    this.authors = this.authorsService.getAuthors();
  }
}
