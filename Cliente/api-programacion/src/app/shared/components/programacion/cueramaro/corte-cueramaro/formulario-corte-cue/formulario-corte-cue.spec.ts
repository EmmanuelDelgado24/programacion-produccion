import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCorteCue } from './formulario-corte-cue';

describe('FormularioCorteCue', () => {
  let component: FormularioCorteCue;
  let fixture: ComponentFixture<FormularioCorteCue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCorteCue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCorteCue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
