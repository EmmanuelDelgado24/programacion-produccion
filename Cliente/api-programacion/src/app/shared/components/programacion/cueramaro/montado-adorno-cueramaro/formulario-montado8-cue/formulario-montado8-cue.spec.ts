import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMontado8Cue } from './formulario-montado8-cue';

describe('FormularioMontado8Cue', () => {
  let component: FormularioMontado8Cue;
  let fixture: ComponentFixture<FormularioMontado8Cue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMontado8Cue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMontado8Cue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
