import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PUserDailogComponent } from './p-user-dailog.component';

describe('PUserDailogComponent', () => {
  let component: PUserDailogComponent;
  let fixture: ComponentFixture<PUserDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PUserDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PUserDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
