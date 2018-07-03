import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayReactiveComponent } from './formarray-reactive.component';

describe('FormarrayReactiveComponent', () => {
  let component: FormarrayReactiveComponent;
  let fixture: ComponentFixture<FormarrayReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormarrayReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarrayReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
