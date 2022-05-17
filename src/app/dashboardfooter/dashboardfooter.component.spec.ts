import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfooterComponent } from './dashboardfooter.component';

describe('DashboardfooterComponent', () => {
  let component: DashboardfooterComponent;
  let fixture: ComponentFixture<DashboardfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
