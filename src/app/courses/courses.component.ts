import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';
  courses: string[];
  isPrimary = false;
  isDanger = false;
  author: string;

  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

  onRadioClick(radioClass: string, $event) {
    $event.stopPropagation();
    if (radioClass === 'primary') {
      this.isPrimary = true;
      this.isDanger = false;
    } else {
      this.isDanger = true;
      this.isPrimary = false;
    }
    console.log($event);
  }

  onClick() {
    console.log('Click event bubbled up!');
  }

  onKeyUp($event, entered) {
    console.log("User entered", $event, entered);
  }

}
