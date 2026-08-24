import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPreacabadoMd } from './formulario-preacabado-md';

describe('FormularioPreacabadoMd', () => {
  let component: FormularioPreacabadoMd;
  let fixture: ComponentFixture<FormularioPreacabadoMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPreacabadoMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPreacabadoMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
