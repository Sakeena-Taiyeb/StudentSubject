import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryStudentListComponent } from './secondary-student-list.component';

describe('SecondaryStudentListComponent', () => {
  let component: SecondaryStudentListComponent;
  let fixture: ComponentFixture<SecondaryStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
