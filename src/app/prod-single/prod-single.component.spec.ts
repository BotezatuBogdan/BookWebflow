import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSingleComponent } from './prod-single.component';

describe('ProdSingleComponent', () => {
  let component: ProdSingleComponent;
  let fixture: ComponentFixture<ProdSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdSingleComponent]
    });
    fixture = TestBed.createComponent(ProdSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
