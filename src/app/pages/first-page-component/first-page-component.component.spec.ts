import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponentComponent } from './first-page-component.component';

describe('FirstPageComponentComponent', () => {
  let component: FirstPageComponentComponent;
  let fixture: ComponentFixture<FirstPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
