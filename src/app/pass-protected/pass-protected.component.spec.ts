import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassProtectedComponent } from './pass-protected.component';

describe('PassProtectedComponent', () => {
  let component: PassProtectedComponent;
  let fixture: ComponentFixture<PassProtectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassProtectedComponent]
    });
    fixture = TestBed.createComponent(PassProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
