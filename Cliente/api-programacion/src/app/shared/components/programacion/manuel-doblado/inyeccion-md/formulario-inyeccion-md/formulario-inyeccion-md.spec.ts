import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInyeccionMd } from './formulario-inyeccion-md';

describe('FormularioInyeccionMd', () => {
  let component: FormularioInyeccionMd;
  let fixture: ComponentFixture<FormularioInyeccionMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioInyeccionMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInyeccionMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
