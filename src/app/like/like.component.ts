import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isSelected: boolean;
  @Input() count = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.count += this.isSelected ? -1 : +1;
    this.isSelected = !this.isSelected;
  }

}
