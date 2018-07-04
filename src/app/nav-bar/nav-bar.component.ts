import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    console.log(this.isExpanded);
    this.isExpanded = !this.isExpanded;
  }

}
