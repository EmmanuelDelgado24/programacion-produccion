import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMontado2Md } from './formulario-montado2-md';

describe('FormularioMontado2Md', () => {
  let component: FormularioMontado2Md;
  let fixture: ComponentFixture<FormularioMontado2Md>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMontado2Md]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMontado2Md);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
