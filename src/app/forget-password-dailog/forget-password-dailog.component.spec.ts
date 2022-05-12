import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordDailogComponent } from './forget-password-dailog.component';

describe('ForgetPasswordDailogComponent', () => {
  let component: ForgetPasswordDailogComponent;
  let fixture: ComponentFixture<ForgetPasswordDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
