import { AppErrorHandler } from './../app/common/app-error-hander';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from 'src/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  private url = 'https://api.github.com/users/mh453Uol/followers';

  constructor(private http: Http) {
  }

  getFollowers() {
    return this.http.get(this.url)
      .pipe(map(response => response.json()))
      .pipe(catchError(AppErrorHandler.handle));
  }
}
