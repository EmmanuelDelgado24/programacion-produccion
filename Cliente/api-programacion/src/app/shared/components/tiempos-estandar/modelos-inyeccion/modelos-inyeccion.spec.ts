import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosInyeccion } from './modelos-inyeccion';

describe('ModelosInyeccion', () => {
  let component: ModelosInyeccion;
  let fixture: ComponentFixture<ModelosInyeccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosInyeccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosInyeccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
