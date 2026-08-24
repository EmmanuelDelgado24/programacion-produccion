import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBanda143Cue } from './formulario-banda143-cue';

describe('FormularioBanda143Cue', () => {
  let component: FormularioBanda143Cue;
  let fixture: ComponentFixture<FormularioBanda143Cue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBanda143Cue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBanda143Cue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
