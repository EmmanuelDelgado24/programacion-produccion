import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMontado5Cue } from './formulario-montado5-cue';

describe('FormularioMontado5Cue', () => {
  let component: FormularioMontado5Cue;
  let fixture: ComponentFixture<FormularioMontado5Cue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMontado5Cue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMontado5Cue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
