import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  cities = [
    { id: 1, name: 'Great Britain' },
    { id: 2, name: 'Pakistan' },
    { id: 3, name: 'Saudi Arabia' },
    { id: 4, name: 'Dubai' }
  ];
  constructor() { }

  ngOnInit() {
  }

  log(e) {
    console.log(e);
  }

  onSubmit(f) {
    console.log(f);
  }
}
