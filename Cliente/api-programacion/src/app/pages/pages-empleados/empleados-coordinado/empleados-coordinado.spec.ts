import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCoordinado } from './empleados-coordinado';

describe('EmpleadosCoordinado', () => {
  let component: EmpleadosCoordinado;
  let fixture: ComponentFixture<EmpleadosCoordinado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosCoordinado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosCoordinado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
