import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsDialogComponent } from './vendors-dialog.component';

describe('VendorsDialogComponent', () => {
  let component: VendorsDialogComponent;
  let fixture: ComponentFixture<VendorsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
