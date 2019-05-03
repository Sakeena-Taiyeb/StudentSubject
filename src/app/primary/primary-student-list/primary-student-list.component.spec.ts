import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryStudentListComponent } from './primary-student-list.component';

describe('PrimaryStudentListComponent', () => {
  let component: PrimaryStudentListComponent;
  let fixture: ComponentFixture<PrimaryStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
