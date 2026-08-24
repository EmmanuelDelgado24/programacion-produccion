import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inyeccion } from './inyeccion';

describe('Inyeccion', () => {
  let component: Inyeccion;
  let fixture: ComponentFixture<Inyeccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inyeccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inyeccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
