import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuReactivo } from './formu-reactivo';

describe('FormuReactivo', () => {
  let component: FormuReactivo;
  let fixture: ComponentFixture<FormuReactivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormuReactivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuReactivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
