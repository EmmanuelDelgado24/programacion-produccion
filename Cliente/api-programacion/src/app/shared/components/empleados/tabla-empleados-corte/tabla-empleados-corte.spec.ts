import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosCorte } from './tabla-empleados-corte';

describe('TablaEmpleadosCorte', () => {
  let component: TablaEmpleadosCorte;
  let fixture: ComponentFixture<TablaEmpleadosCorte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosCorte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosCorte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
