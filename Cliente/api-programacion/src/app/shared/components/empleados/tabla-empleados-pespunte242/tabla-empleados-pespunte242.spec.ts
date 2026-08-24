import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosPespunte242 } from './tabla-empleados-pespunte242';

describe('TablaEmpleadosPespunte242', () => {
  let component: TablaEmpleadosPespunte242;
  let fixture: ComponentFixture<TablaEmpleadosPespunte242>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosPespunte242]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosPespunte242);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
