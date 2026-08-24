import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlantillaMd } from './formulario-plantilla-md';

describe('FormularioPlantillaMd', () => {
  let component: FormularioPlantillaMd;
  let fixture: ComponentFixture<FormularioPlantillaMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPlantillaMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPlantillaMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
