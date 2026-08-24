import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCorte } from './empleados-corte';

describe('EmpleadosCorte', () => {
  let component: EmpleadosCorte;
  let fixture: ComponentFixture<EmpleadosCorte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosCorte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosCorte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
