import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosCoordinado } from './tabla-empleados-coordinado';

describe('TablaEmpleadosCoordinado', () => {
  let component: TablaEmpleadosCoordinado;
  let fixture: ComponentFixture<TablaEmpleadosCoordinado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosCoordinado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosCoordinado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
