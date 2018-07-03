import { AppErrorHandler } from './../app/common/app-error-hander';
import { AppError } from 'src/app/common/app.error';
import { NotFoundError } from './../app/common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BadRequestError } from 'src/app/common/bad-request-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private url: string,
        private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(map(response => response.json()))
            .pipe(catchError(AppErrorHandler.handle));
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(map(response => response.json()))
            .pipe(catchError(AppErrorHandler.handle));
    }

    delete(resourceId: number) {
        return this.http.delete(this.url + '/' + resourceId)
            .pipe(map(response => response.json()))
            .pipe(catchError(AppErrorHandler.handle));
    }

    editPut(resourcesId: number, post) {
        return this.http.put(this.url + '/' + resourcesId, JSON.stringify(post))
            .pipe(map(response => response.json()))
            .pipe(catchError(AppErrorHandler.handle));
    }

    editPatch(resourceId: number, partialPost) {
        return this.http.patch(this.url + '/' + resourceId, JSON.stringify(partialPost))
            .pipe(map(response => response.json()))
            .pipe(catchError(AppErrorHandler.handle));
    }
}
