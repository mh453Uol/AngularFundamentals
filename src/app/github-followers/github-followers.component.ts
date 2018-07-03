import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { GithubFollowersService } from './../../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getFollowers()
      .subscribe(followers => {
        this.followers = followers;
        console.log(this.followers);
      },
      (errors: AppError) => {
        if (errors instanceof NotFoundError) {
          alert('Cant load followers');
        } else {
          throw errors;
        }
      });
  }

}
