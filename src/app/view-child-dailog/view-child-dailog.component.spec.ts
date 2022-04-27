import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDailogComponent } from './view-child-dailog.component';

describe('ViewChildDailogComponent', () => {
  let component: ViewChildDailogComponent;
  let fixture: ComponentFixture<ViewChildDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
