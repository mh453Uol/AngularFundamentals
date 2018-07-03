import { AppError } from './app.error';
export class BadRequestError extends AppError {

    constructor(error: Response) {
        super(error);
    }

}