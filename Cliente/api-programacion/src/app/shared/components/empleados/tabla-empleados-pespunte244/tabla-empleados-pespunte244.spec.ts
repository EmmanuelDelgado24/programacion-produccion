import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosPespunte244 } from './tabla-empleados-pespunte244';

describe('TablaEmpleadosPespunte244', () => {
  let component: TablaEmpleadosPespunte244;
  let fixture: ComponentFixture<TablaEmpleadosPespunte244>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleadosPespunte244]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEmpleadosPespunte244);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
