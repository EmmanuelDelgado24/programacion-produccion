import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosAdorno } from './empleados-adorno';

describe('EmpleadosAdorno', () => {
  let component: EmpleadosAdorno;
  let fixture: ComponentFixture<EmpleadosAdorno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosAdorno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosAdorno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
