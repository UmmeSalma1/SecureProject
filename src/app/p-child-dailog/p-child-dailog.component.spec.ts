import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PChildDailogComponent } from './p-child-dailog.component';

describe('PChildDailogComponent', () => {
  let component: PChildDailogComponent;
  let fixture: ComponentFixture<PChildDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PChildDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PChildDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
