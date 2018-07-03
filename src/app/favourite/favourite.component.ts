import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  //Inline styles (Angular picks only one style definitions!)
  styles: [
    `
    .fa {
      background: pink;
    }
    `
  ],
  //Angular uses browser native shadow dom
  //encapsulation: ViewEncapsulation.Native

  //Angular uses this under the hood,
  //it makes it own version of shadow dom
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {
  @Input('is-favorite') isSelected: boolean;
  @Output('on-change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({
      newValue: this.isSelected
    });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
