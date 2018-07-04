import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.css']
})
export class BlogArchiveComponent implements OnInit {
  year: number;
  month: number;

  constructor(private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.router.paramMap.subscribe(map => {
      this.year = +map.get('year');
      this.month = +map.get('month');
    });
  }

  get title() {
    return 'Archive for ' + this.year + '/' + this.month;
  }

  viewAll() {
    this.route.navigate(['/']);
  }

}
