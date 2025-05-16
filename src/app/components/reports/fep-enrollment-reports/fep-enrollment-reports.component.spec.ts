import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FepEnrollmentReportsComponent } from './fep-enrollment-reports.component';

describe('FepEnrollmentReportsComponent', () => {
  let component: FepEnrollmentReportsComponent;
  let fixture: ComponentFixture<FepEnrollmentReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FepEnrollmentReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FepEnrollmentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
