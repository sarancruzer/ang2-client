import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcommentsComponent } from './editcomments.component';

describe('EditcommentsComponent', () => {
  let component: EditcommentsComponent;
  let fixture: ComponentFixture<EditcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
