import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsHttppComponent } from './posts-httpp.component';

describe('PostsHttppComponent', () => {
  let component: PostsHttppComponent;
  let fixture: ComponentFixture<PostsHttppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsHttppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsHttppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
