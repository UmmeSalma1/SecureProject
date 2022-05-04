import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRequestComponent } from './child-request.component';

describe('ChildRequestComponent', () => {
  let component: ChildRequestComponent;
  let fixture: ComponentFixture<ChildRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
