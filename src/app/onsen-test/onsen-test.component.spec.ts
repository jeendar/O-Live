import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsenTestComponent } from './onsen-test.component';

describe('OnsenTestComponent', () => {
  let component: OnsenTestComponent;
  let fixture: ComponentFixture<OnsenTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnsenTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
