import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nestedgroup-reactive',
  templateUrl: './nestedgroup-reactive.component.html',
  styleUrls: ['./nestedgroup-reactive.component.css']
})
export class NestedgroupReactiveComponent implements OnInit {

  form = new FormGroup({
    personal: new FormGroup({
      name: new FormControl('')
    }),
    shipping: new FormGroup({
      address: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  get name() {
    return this.form.get('personal.name');
  }

  get address() {
    return this.form.get('personal.address');
  }

  log() {
    console.log(this.form);
  }
}
