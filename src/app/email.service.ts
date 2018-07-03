import { Injectable } from '@angular/core';

// we use @injectable when the service has 
// dependences in constructor
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
