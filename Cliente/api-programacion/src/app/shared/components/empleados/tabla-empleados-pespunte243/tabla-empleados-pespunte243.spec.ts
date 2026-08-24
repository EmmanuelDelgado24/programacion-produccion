import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosPespunte243 } from './tabla-empleados-pespunte243';

describe('TablaEmpleadosPespunte243', () => {
  let component: TablaEmpleadosPespunte243;
  let fixture: ComponentFixture<TablaEmpleadosPespunte243>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosPespunte243]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosPespunte243);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
