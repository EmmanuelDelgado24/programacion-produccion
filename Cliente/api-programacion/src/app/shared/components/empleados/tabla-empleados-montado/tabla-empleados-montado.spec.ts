import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosMontado } from './tabla-empleados-montado';

describe('TablaEmpleadosMontadoAdorno', () => {
  let component: TablaEmpleadosMontado;
  let fixture: ComponentFixture<TablaEmpleadosMontado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosMontado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosMontado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
