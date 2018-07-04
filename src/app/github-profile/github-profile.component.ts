import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('OnInit Github profile');
    this.route.paramMap.subscribe((map) => {
      this.username = map.get('username');
      console.log(map.get('s'));
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 2, order: 'newest' }
    });
  }

}
