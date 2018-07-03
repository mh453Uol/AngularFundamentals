import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedgroupReactiveComponent } from './nestedgroup-reactive.component';

describe('NestedgroupReactiveComponent', () => {
  let component: NestedgroupReactiveComponent;
  let fixture: ComponentFixture<NestedgroupReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedgroupReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedgroupReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
