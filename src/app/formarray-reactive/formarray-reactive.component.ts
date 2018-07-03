import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray-reactive',
  templateUrl: './formarray-reactive.component.html',
  styleUrls: ['./formarray-reactive.component.css']
})
export class FormarrayReactiveComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });

  //Explitic Way
  formLongMethod = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topcis: new FormArray([])
  });

  constructor(fb: FormBuilder) {
    //FormBuilder 
    fb.group({
      name: ['', Validators.required], //formcontrol
      contact: fb.group({ //formgroup
        email: [],//formcontrol
        phone: []//formcontrol
      }),
      topics: fb.array([]) //formarray
    });

  }

  ngOnInit() {
  }

  addTopic(name: HTMLInputElement) {
    this.topics.push(new FormControl(name.value));
    name.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  editTopic(index: number, name: string) {
    (this.topics.controls[index] as FormControl).setValue(name);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  log(f) {
    console.log(f);
  }

}
