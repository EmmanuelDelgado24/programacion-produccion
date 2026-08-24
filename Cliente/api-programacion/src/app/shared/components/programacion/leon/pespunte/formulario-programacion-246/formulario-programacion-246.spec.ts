import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramacion246 } from './formulario-programacion-246';

describe('FormularioProgramacion246', () => {
  let component: FormularioProgramacion246;
  let fixture: ComponentFixture<FormularioProgramacion246>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProgramacion246]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProgramacion246);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
