import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBanda141Cue } from './formulario-banda141-cue';

describe('FormularioBanda141Cue', () => {
  let component: FormularioBanda141Cue;
  let fixture: ComponentFixture<FormularioBanda141Cue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBanda141Cue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBanda141Cue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
