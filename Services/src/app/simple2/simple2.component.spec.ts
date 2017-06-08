import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple2Component } from './simple2.component';

describe('Simple2Component', () => {
  let component: Simple2Component;
  let fixture: ComponentFixture<Simple2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
