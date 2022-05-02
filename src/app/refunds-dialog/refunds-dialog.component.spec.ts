import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsDialogComponent } from './refunds-dialog.component';

describe('RefundsDialogComponent', () => {
  let component: RefundsDialogComponent;
  let fixture: ComponentFixture<RefundsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
