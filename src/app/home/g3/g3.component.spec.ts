import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G3Component } from './g3.component';

describe('G3Component', () => {
  let component: G3Component;
  let fixture: ComponentFixture<G3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [G3Component]
    });
    fixture = TestBed.createComponent(G3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
