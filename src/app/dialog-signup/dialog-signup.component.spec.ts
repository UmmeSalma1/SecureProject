import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignupComponent } from './dialog-signup.component';

describe('DialogSignupComponent', () => {
  let component: DialogSignupComponent;
  let fixture: ComponentFixture<DialogSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
