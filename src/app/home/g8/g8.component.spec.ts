import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G8Component } from './g8.component';

describe('G8Component', () => {
  let component: G8Component;
  let fixture: ComponentFixture<G8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [G8Component]
    });
    fixture = TestBed.createComponent(G8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
