import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuNormal } from './formu-normal';

describe('FormuNormal', () => {
  let component: FormuNormal;
  let fixture: ComponentFixture<FormuNormal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormuNormal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuNormal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
