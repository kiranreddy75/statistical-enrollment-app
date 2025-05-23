import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminComponent } from './system-admin.component';

describe('SystemAdminComponent', () => {
  let component: SystemAdminComponent;
  let fixture: ComponentFixture<SystemAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
