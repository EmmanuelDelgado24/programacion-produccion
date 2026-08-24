import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosPespunte246 } from './tabla-empleados-pespunte246';

describe('TablaEmpleadosPespunte246', () => {
  let component: TablaEmpleadosPespunte246;
  let fixture: ComponentFixture<TablaEmpleadosPespunte246>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosPespunte246]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosPespunte246);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
