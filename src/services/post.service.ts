import { DataService } from './data.service';
import { AppError } from 'src/app/common/app.error';
import { NotFoundError } from './../app/common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts',
      http);
  }
}
