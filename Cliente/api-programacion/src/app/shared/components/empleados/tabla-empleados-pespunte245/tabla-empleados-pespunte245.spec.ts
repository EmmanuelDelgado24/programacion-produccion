import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosPespunte245 } from './tabla-empleados-pespunte245';

describe('TablaEmpleadosPespunte245', () => {
  let component: TablaEmpleadosPespunte245;
  let fixture: ComponentFixture<TablaEmpleadosPespunte245>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosPespunte245]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosPespunte245);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
