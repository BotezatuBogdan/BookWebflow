import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G6Component } from './g6.component';

describe('G6Component', () => {
  let component: G6Component;
  let fixture: ComponentFixture<G6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [G6Component]
    });
    fixture = TestBed.createComponent(G6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
