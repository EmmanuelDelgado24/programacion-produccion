import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCoordinadoMd } from './formulario-coordinado-md';

describe('FormularioCoordinadoMd', () => {
  let component: FormularioCoordinadoMd;
  let fixture: ComponentFixture<FormularioCoordinadoMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCoordinadoMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCoordinadoMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
