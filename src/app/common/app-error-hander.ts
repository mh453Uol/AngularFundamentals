import { AppError } from './app.error';
import { BadRequestError } from './bad-request-error';
import { Observable, throwError } from 'rxjs';
import { NotFoundError } from 'src/app/common/not-found-error';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    static handle(error: Response) {
        switch (error.status) {
            case 404:
                return throwError(new NotFoundError(error));
            case 400:
                return throwError(new BadRequestError(error));
            default:
                return throwError(new AppError(error));
        }
    }

    //handles unexpected errors 
    handleError(error: any): void {
        alert('An unexpected error occured');
        console.log(error);
    }
}