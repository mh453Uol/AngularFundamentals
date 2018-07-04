import { Observable, pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { GithubFollowersService } from './../../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers = [];
  sort: string;
  page: number;

  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(";;");
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    //   .subscribe(combined => {
    //     console.log("Executed");
    //     console.log(combined[0]);
    //     console.log(combined[1]);
    //   });

    // //getting query params
    // this.route.queryParamMap.subscribe(query => {
    //   this.sort = query.get('order');
    //   this.page = +query.get('page');
    // });

    // this.route.paramMap.subscribe(query => {
    //   console.log(query);
    // });

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
