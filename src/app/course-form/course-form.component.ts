import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categories = [
    { id: 1, name: 'Art' },
    { id: 2, name: 'Software Development' },
    { id: 3, name: 'Singing' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
