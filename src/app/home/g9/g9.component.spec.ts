import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G9Component } from './g9.component';

describe('G9Component', () => {
  let component: G9Component;
  let fixture: ComponentFixture<G9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [G9Component]
    });
    fixture = TestBed.createComponent(G9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
