import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G7Component } from './g7.component';

describe('G7Component', () => {
  let component: G7Component;
  let fixture: ComponentFixture<G7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [G7Component]
    });
    fixture = TestBed.createComponent(G7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
