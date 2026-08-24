import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBanda142Cue } from './formulario-banda142-cue';

describe('FormularioBanda142Cue', () => {
  let component: FormularioBanda142Cue;
  let fixture: ComponentFixture<FormularioBanda142Cue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBanda142Cue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBanda142Cue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
